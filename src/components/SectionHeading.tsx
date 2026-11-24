import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  children: string;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={[styles.heading, className].filter(Boolean).join(' ')}>
      <h2>{children}</h2>
    </div>
  );
}
