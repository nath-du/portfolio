import type { FormEvent } from 'react';
import { siteContent } from '../data/siteContent';
import { ArrowAction } from './ArrowAction';
import styles from './Contact.module.css';

const CONTACT_FORM_AVAILABLE = false;

function ContactForm() {
  const { contact } = siteContent;
  const { form } = contact;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = [
      `${form.name.label}: ${values.get(form.name.name) ?? ''}`,
      `${form.replyTo.label}: ${values.get(form.replyTo.name) ?? ''}`,
      `${form.need.label}: ${values.get(form.need.name) ?? ''}`,
      `${form.details.label}: ${values.get(form.details.name) ?? ''}`,
    ].join('\n');
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(form.mailSubject)}&body=${encodeURIComponent(body)}`;
  }

  if (!CONTACT_FORM_AVAILABLE) {
    return (
      <div className={styles.unavailable} role="status">
        <p className={styles.unavailableTitle}>Form temporaneamente non disponibile</p>
        <p className={styles.unavailableText}>
          Il modulo di contatto è momentaneamente in manutenzione. Nel frattempo puoi scrivermi direttamente via email o telefono usando i recapiti qui accanto.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor={form.name.id}>{form.name.label}</label>
        <input id={form.name.id} name={form.name.name} type="text" placeholder={form.name.placeholder} required={form.name.required} />
      </div>
      <div className={styles.field}>
        <label htmlFor={form.replyTo.id}>{form.replyTo.label}</label>
        <input id={form.replyTo.id} name={form.replyTo.name} type="text" placeholder={form.replyTo.placeholder} required={form.replyTo.required} />
      </div>
      <div className={styles.field}>
        <label htmlFor={form.need.id}>{form.need.label}</label>
        <select id={form.need.id} name={form.need.name}>
          {form.need.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor={form.details.id}>{form.details.label}</label>
        <textarea id={form.details.id} name={form.details.name} placeholder={form.details.placeholder} />
      </div>
      <div className={styles.submitRow}>
        <span>{form.submitLabel}</span>
        <ArrowAction type="submit" ariaLabel={form.submitAriaLabel} />
      </div>
    </form>
  );
}

export function Contact() {
  const { contact } = siteContent;
  return (
    <section id={siteContent.sectionIds.contact} className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.pitch}>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
          <div className={styles.channels}>
            <a className={styles.channel} href={`mailto:${contact.email}`}>
              <span>
                <span className={styles.channelLabel}>{contact.emailLabel}</span>
                <span className={styles.channelValue}>{contact.email}</span>
              </span>
              <ArrowAction href={`mailto:${contact.email}`} ariaLabel={contact.emailLabel} size="small" />
            </a>
            <a className={styles.channel} href={`tel:${contact.phone.dial}`}>
              <span>
                <span className={styles.channelLabel}>{contact.phoneLabel}</span>
                <span className={styles.channelValue}>{contact.phone.display}</span>
              </span>
              <ArrowAction href={`tel:${contact.phone.dial}`} ariaLabel={contact.phoneLabel} size="small" />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
