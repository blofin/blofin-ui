import { FC } from 'react';
import styles from './index.module.scss';

export const Switch: FC<{ check: boolean; onChange: () => void }> = ({check,onChange}) => {
  const change = () => {
    onChange();
  };

  return (
    <div className={`${styles.switch} ${check ? styles.primary : ''}`} onClick={change}>
      <div className={`${styles.thumb} ${check ? styles.move : ''}`}></div>
    </div>
  );
};

