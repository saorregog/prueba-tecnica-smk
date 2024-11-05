// Style
import styles from "./Block3.module.css";

interface DataInterface {
  id: number;
  name: string;
  quote: string;
  title: string;
}

interface Block3Props {
  data: DataInterface;
}

function Block3({ data }: Block3Props) {
  return (
    <section className={styles.block_container}>
      <div className={styles.text_container}>
        <div>
          <span className={styles.quote}>{data.quote}</span>
          <p className={styles.author}>
            {`${data.name}
${data.title}`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Block3;
