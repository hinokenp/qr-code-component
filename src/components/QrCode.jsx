import styles from "./QrCode.module.css";

const QrCode = (props) => {
  return (
    <div className={styles.qrCode}>
      <img src={props.img} alt="QR Code" className={styles.img} />
      <div className={styles.content}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );
};

export default QrCode;
