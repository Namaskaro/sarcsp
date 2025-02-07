import styles from './GlowButton.module.css';

type GlowButtonType = {
  children?: React.ReactNode;
  to?: string;
};

export const GlowButton = ({ children, to }: GlowButtonType) => {
  return (
    <div className={styles.Inner}>
      <button className={styles.BtnGl}></button>
      <a href={to} className={styles.Link}>
        {children}
        Записаться
      </a>
    </div>
  );
};
