import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOCATIONS, whatsappLink } from '../../data/site';
import { CheckIcon } from './Icons';

const EMPTY = { name: '', phone: '', email: '', location: '', message: '' };
const PHONE_RE = /^(\+?92|0)?3\d{2}[-\s]?\d{7}$/;

const inputCls =
  'w-full rounded-md border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-body/60 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20';

/**
 * Appointment enquiry form. There is no backend yet, so a valid submission opens WhatsApp
 * with the enquiry pre-filled for the clinic number.
 */
export default function ContactForm({ title = 'Get In Touch' }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (values.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!PHONE_RE.test(values.phone.replace(/\s+/g, ''))) next.phone = 'Please enter a valid mobile number, e.g. 0300-1234567.';
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.';
    if (values.message.trim().length < 5) next.message = 'Please tell us briefly how we can help.';
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      'Appointment enquiry – OrthoCare website',
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email && `Email: ${values.email}`,
      values.location && `Preferred clinic: ${values.location}`,
      `Message: ${values.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
    setSent(true);
    setValues(EMPTY);
  };

  const field = (name, label, el) => (
    <div>
      <label htmlFor={`cf-${name}`} className="sr-only">{label}</label>
      {el}
      {errors[name] && <p className="mt-1 text-xs text-red-600">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="rounded-xl border border-ink/15 bg-white p-6 shadow-lg shadow-primary-900/5 sm:p-8">
      <h3 className="text-center text-xl font-semibold text-accent-500">{title}</h3>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary-50 text-primary-600">
              <CheckIcon className="h-7 w-7" />
            </span>
            <p className="mt-4 font-medium text-ink">Thank you – your enquiry is ready in WhatsApp.</p>
            <p className="mt-1 text-sm">Press send in WhatsApp and our team will reply to confirm your appointment.</p>
            <button type="button" onClick={() => setSent(false)} className="mt-5 text-sm font-semibold text-accent-600 hover:underline">
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {field('name', 'Name', <input id="cf-name" autoComplete="name" placeholder="Name *" value={values.name} onChange={set('name')} className={inputCls} />)}
              {field('phone', 'Phone number', <input id="cf-phone" type="tel" autoComplete="tel" placeholder="Phone number *" value={values.phone} onChange={set('phone')} className={inputCls} />)}
            </div>
            {field('email', 'Email', <input id="cf-email" type="email" autoComplete="email" placeholder="Email (optional)" value={values.email} onChange={set('email')} className={inputCls} />)}
            {field(
              'location',
              'Preferred clinic',
              <select id="cf-location" value={values.location} onChange={set('location')} className={inputCls}>
                <option value="">Preferred clinic (optional)</option>
                {LOCATIONS.map((l) => (
                  <option key={l.id} value={`${l.name}, ${l.city}`}>{l.name}, {l.city}</option>
                ))}
              </select>,
            )}
            {field('message', 'Message', <textarea id="cf-message" rows={4} placeholder="Write a message *" value={values.message} onChange={set('message')} className={inputCls} />)}
            <button
              type="submit"
              className="w-full rounded-md bg-accent-500 py-3 text-sm font-semibold text-white shadow-md shadow-accent-500/25 transition hover:bg-accent-600"
            >
              Submit
            </button>
            <p className="text-center text-[11px] text-body/80">Your enquiry opens in WhatsApp so our team can reply directly.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
