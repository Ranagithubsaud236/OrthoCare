import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';
import Button from '../common/Button';
import BookButton from '../common/BookButton';
import SocialLinks from '../common/SocialLinks';
import { ChevronDown, ChevronRight, MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon } from '../common/Icons';
import { NAV, SITE, whatsappLink } from '../../data/site';
import { DIAGNOSES, optionGroups, optionHref } from '../../data/diagnoses';

// Diagnoses with several options get a second-level flyout (desktop) / accordion (mobile) via `groups`;
// single-option ones (e.g. Tumour Surgery) are plain links to their page.
const DIAGNOSIS_LINKS = DIAGNOSES.map((d) => ({
  label: d.title,
  to: `/diagnosis/${d.id}`,
  groups:
    d.options.length > 1
      ? optionGroups(d).map((g) => ({ name: g.name, links: g.options.map((o) => ({ label: o.label, to: optionHref(d, o) })) }))
      : undefined,
}));
const childrenOf = (item) => (item.children === 'diagnosis' ? DIAGNOSIS_LINKS : item.children);

/** True when the current path belongs to this nav item (or one of its children). */
function useIsActive() {
  const { pathname } = useLocation();
  return (item) => {
    if (item.to === '/') return pathname === '/';
    const kids = childrenOf(item) ?? [];
    const owns = item.children === 'diagnosis' && pathname.startsWith('/treatments/');
    return owns || pathname.startsWith(item.to) || kids.some((c) => pathname.startsWith(c.to));
  };
}

/** Second-level panel beside a dropdown item, listing its grouped sub-links. */
function Flyout({ groups, onNavigate, flip }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: flip ? 8 : -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: flip ? 4 : -4 }}
      transition={{ duration: 0.18 }}
      className={`absolute top-0 z-50 -mt-2 w-72 rounded-xl bg-white py-3 shadow-2xl shadow-primary-900/15 ${
        flip ? 'right-full border-r-2 border-accent-500' : 'left-full border-l-2 border-accent-500'
      }`}
    >
      {groups.map((g) => (
        <div key={g.name || 'all'} className="px-2 [&+&]:mt-2 [&+&]:border-t [&+&]:border-ink/5 [&+&]:pt-2">
          {g.name && <p className="px-3 pb-1 pt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-600">{g.name}</p>}
          <ul>
            {g.links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={onNavigate}
                  className="block rounded-md px-3 py-2 text-[13px] leading-snug text-ink transition-colors hover:bg-primary-50 hover:text-primary-600"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}

function DesktopDropdown({ item, active }) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const [flip, setFlip] = useState(false);
  const links = childrenOf(item);
  // Open the flyout to the left when there is no room for it on the right (288px panel).
  const measure = (el) => el && setFlip(el.getBoundingClientRect().right + 288 > window.innerWidth);
  const close = () => {
    setOpen(false);
    setSub(null);
  };

  return (
    <li className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={close}>
      <Link
        to={item.to}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        className={`relative flex items-center gap-1 px-2 py-7 text-sm xl:px-3 font-medium tracking-wide transition-colors hover:text-accent-500 ${active ? 'text-accent-500' : 'text-ink'}`}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        <span className={`absolute inset-x-3 bottom-5 h-0.5 origin-left rounded-full bg-accent-500 transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0'}`} />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            ref={measure}
            className="absolute left-0 top-full z-50 w-72 rounded-b-xl border-t-2 border-accent-500 bg-white py-2 shadow-2xl shadow-primary-900/15"
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && close()}
          >
            {links.map((link) => (
              <li
                key={link.to}
                className="relative"
                onMouseEnter={() => setSub(link.groups ? link.to : null)}
                onFocus={() => setSub(link.groups ? link.to : null)}
              >
                <NavLink
                  to={link.to}
                  onClick={close}
                  aria-haspopup={link.groups ? 'true' : undefined}
                  aria-expanded={link.groups ? sub === link.to : undefined}
                  className={({ isActive }) =>
                    `flex items-center justify-between gap-2 px-5 py-2.5 text-sm transition-all duration-200 hover:bg-primary-50 hover:text-primary-600 ${
                      isActive || sub === link.to ? 'bg-primary-50 text-accent-600' : 'text-ink'
                    }`
                  }
                >
                  {link.label}
                  {link.groups && <ChevronRight className="h-3.5 w-3.5 flex-none opacity-60" />}
                </NavLink>
                <AnimatePresence>{link.groups && sub === link.to && <Flyout groups={link.groups} onNavigate={close} flip={flip} />}</AnimatePresence>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

function MobileMenu({ onClose, isActive }) {
  const [expanded, setExpanded] = useState(null);
  const [subOpen, setSubOpen] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-primary-950/50 backdrop-blur-sm lg:hidden"
      onClick={onClose}
    >
      <motion.nav
        aria-label="Mobile"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <Logo />
          <button type="button" onClick={onClose} aria-label="Close menu" className="rounded-full p-2 text-ink hover:bg-primary-50">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex-1 px-3 py-4">
          {NAV.map((item) => {
            const kids = childrenOf(item);
            const isOpen = expanded === item.label;
            return (
              <li key={item.label} className="border-b border-ink/5">
                {kids ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      className={`flex w-full items-center justify-between px-3 py-3.5 text-left font-medium ${isActive(item) ? 'text-accent-500' : 'text-ink'}`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                          {kids.map((k) => (
                            <li key={k.to}>
                              <div className="flex items-center">
                                <NavLink to={k.to} onClick={onClose} className={({ isActive: a }) => `block flex-1 py-2.5 pl-7 pr-3 text-sm ${a ? 'text-accent-600' : 'text-body'}`}>
                                  {k.label}
                                </NavLink>
                                {k.groups && (
                                  <button
                                    type="button"
                                    aria-label={`${subOpen === k.to ? 'Hide' : 'Show'} ${k.label} options`}
                                    aria-expanded={subOpen === k.to}
                                    onClick={() => setSubOpen(subOpen === k.to ? null : k.to)}
                                    className="mr-1 rounded-full p-2 text-body hover:bg-primary-50"
                                  >
                                    <ChevronDown className={`h-4 w-4 transition-transform ${subOpen === k.to ? 'rotate-180' : ''}`} />
                                  </button>
                                )}
                              </div>
                              <AnimatePresence initial={false}>
                                {k.groups && subOpen === k.to && (
                                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                    <div className="mb-2 ml-7 border-l-2 border-accent-200 pl-3">
                                      {k.groups.map((g) => (
                                        <div key={g.name || 'all'} className="py-1">
                                          {g.name && <p className="pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-600">{g.name}</p>}
                                          {g.links.map((l) => (
                                            <Link key={l.to} to={l.to} onClick={onClose} className="block py-1.5 text-[13px] text-body">
                                              {l.label}
                                            </Link>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink to={item.to} end onClick={onClose} className={({ isActive: a }) => `block px-3 py-3.5 font-medium ${a ? 'text-accent-500' : 'text-ink'}`}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
        <div className="space-y-3 border-t border-ink/10 p-5">
          <BookButton className="w-full" showNumber onClick={onClose} />
          <Button href={SITE.phoneHref} variant="outline" arrow={false} className="w-full">
            <PhoneIcon className="h-4 w-4" /> {SITE.phone}
          </Button>
          <div className="flex justify-center pt-1">
            <SocialLinks size="lg" />
          </div>
        </div>
      </motion.nav>
    </motion.div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = useIsActive();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-primary-900/5' : ''}`}>
      <div className="bg-primary-700 text-white">
        <div className="container-x flex h-9 items-center justify-center gap-2.5 text-[11px] font-medium min-[400px]:text-xs sm:justify-end sm:text-[13px]">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-2 hover:text-accent-200">
            <WhatsAppIcon className="h-4 w-4 flex-none text-[#25D366]" />
            <span className="whitespace-nowrap font-semibold uppercase tracking-normal text-accent-300 min-[400px]:tracking-wider">Book Appointment</span>
            <span aria-hidden="true" className="text-white/40">|</span>
            <span className="whitespace-nowrap"><span className="hidden min-[400px]:inline">Assistant: </span><strong className="font-semibold">{SITE.phone}</strong></span>
          </a>
          {/* Four icons don't fit beside the number on phones; there they live in the menu and footer. */}
          <span className="hidden items-center gap-3 sm:flex">
            <span aria-hidden="true" className="h-4 w-px bg-white/25" />
            <SocialLinks size="sm" />
          </span>
        </div>
      </div>
      <div className="container-x flex h-20 items-center justify-between gap-2">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} active={isActive(item)} />
              ) : (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive: a }) =>
                      `relative block px-2 py-7 text-sm xl:px-3 font-medium tracking-wide transition-colors hover:text-accent-500 ${a ? 'text-accent-500' : 'text-ink'}`
                    }
                  >
                    {({ isActive: a }) => (
                      <>
                        {item.label}
                        <span className={`absolute inset-x-3 bottom-5 h-0.5 origin-left rounded-full bg-accent-500 transition-transform duration-300 ${a ? 'scale-x-100' : 'scale-x-0'}`} />
                      </>
                    )}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block lg:hidden xl:block"><BookButton /></span>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="rounded-full p-2 text-ink transition-colors hover:bg-primary-50 lg:hidden"
          >
            <MenuIcon className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Portalled: the header's backdrop-blur would otherwise trap this fixed overlay inside the header. */}
      {createPortal(
        <AnimatePresence>{mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} isActive={isActive} />}</AnimatePresence>,
        document.body,
      )}
    </header>
  );
}
