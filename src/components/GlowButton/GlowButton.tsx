import styles from './GlowButton.module.css';

type GlowButtonType = {
  children?: React.ReactNode;
  to?: string;
  text?: string;
};

export const GlowButton = ({ children, to, text }: GlowButtonType) => {
  return (
    <div className={styles.Inner}>
      <button className={styles.BtnGl}></button>
      <a href={to} className={styles.Link}>
        {children}
        {text ? text : 'Записаться'}
      </a>
    </div>
  );
};
