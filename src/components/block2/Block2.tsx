// Style
import styles from "./Block2.module.css";

interface BackgroundInterface {
  documentId: string;
  id: number;
  mime: string;
  url: string;
}

interface DataInterface {
  background: BackgroundInterface;
  id: number;
  text: string;
  title: string;
}

interface Block2Props {
  data: DataInterface;
}

function Block2({ data }: Block2Props) {
  return (
    <section className={styles.block_container}>
      <div className={styles.text_frame}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.text}>{data.text}</p>
      </div>
    </section>
  );
}

export default Block2;
