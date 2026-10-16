import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { ChevronDown, MenuIcon, CloseIcon, PhoneIcon } from '../common/Icons';
import { NAV, SITE } from '../../data/site';
import { TREATMENTS } from '../../data/treatments';

const TREATMENT_LINKS = TREATMENTS.map((t) => ({ label: t.title, to: `/treatments/${t.slug}` }));
const childrenOf = (item) => (item.children === 'treatments' ? TREATMENT_LINKS : item.children);

/** True when the current path belongs to this nav item (or one of its children). */
function useIsActive() {
  const { pathname } = useLocation();
  return (item) => {
    if (item.to === '/') return pathname === '/';
    const kids = childrenOf(item) ?? [];
    return pathname.startsWith(item.to) || kids.some((c) => pathname.startsWith(c.to));
  };
}

function DesktopDropdown({ item, active }) {
  const [open, setOpen] = useState(false);
  const links = childrenOf(item);

  return (
    <li className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        to={item.to}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        className={`relative flex items-center gap-1 px-3 py-7 text-sm font-medium tracking-wide transition-colors hover:text-accent-500 ${active ? 'text-accent-500' : 'text-ink'}`}
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
            className="absolute left-0 top-full z-50 w-72 overflow-hidden rounded-b-xl border-t-2 border-accent-500 bg-white py-2 shadow-2xl shadow-primary-900/15"
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
          >
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-5 py-2.5 text-sm transition-all duration-200 hover:bg-primary-50 hover:pl-7 hover:text-primary-600 ${isActive ? 'bg-primary-50 text-accent-600' : 'text-ink'}`
                  }
                >
                  {link.label}
                </NavLink>
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
                              <NavLink to={k.to} onClick={onClose} className={({ isActive: a }) => `block py-2.5 pl-7 pr-3 text-sm ${a ? 'text-accent-600' : 'text-body'}`}>
                                {k.label}
                              </NavLink>
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
          <Button to="/contact" className="w-full" onClick={onClose}>Contact Us</Button>
          <Button href={SITE.phoneHref} variant="outline" arrow={false} className="w-full">
            <PhoneIcon className="h-4 w-4" /> {SITE.phone}
          </Button>
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
                      `relative block px-3 py-7 text-sm font-medium tracking-wide transition-colors hover:text-accent-500 ${a ? 'text-accent-500' : 'text-ink'}`
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
          <span className="hidden sm:block"><Button to="/contact">Contact Us</Button></span>
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
