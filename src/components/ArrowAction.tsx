import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './ArrowAction.module.css';

type Size = 'small' | 'medium' | 'large';
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  ariaLabel: string;
  size?: Size;
};
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  ariaLabel: string;
  size?: Size;
};
type ArrowActionProps = LinkProps | ButtonProps;

export function ArrowGlyph() {
  return (
    <svg className={styles.glyph} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function ArrowAction(props: ArrowActionProps) {
  const { ariaLabel, size = 'medium', className, ...rest } = props;
  const classes = [styles.action, styles[size], className].filter(Boolean).join(' ');

  if ('href' in props && typeof props.href === 'string') {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} href={props.href} className={classes} aria-label={ariaLabel}>
        <ArrowGlyph />
      </a>
    );
  }

  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? 'button'} className={classes} aria-label={ariaLabel}>
      <ArrowGlyph />
    </button>
  );
}
