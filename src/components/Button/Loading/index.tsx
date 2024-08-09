import styles from './index.module.scss';

const Loading = () => {
  return (
    <div className={styles["m-load2"]}>
      <div className={styles.line}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.circlebg}></div>
    </div>
  );
};

export default Loading