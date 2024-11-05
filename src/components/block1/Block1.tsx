// Style
import styles from "./Block1.module.css";

interface WordInterface {
  id: number;
  word: string;
}

interface DataInterface {
  id: number;
  text_1: string;
  text_2: string;
  words: WordInterface[];
}

interface Block1Props {
  data: DataInterface;
}

function Block1({ data }: Block1Props) {
  return (
    <section className={styles.block_container}>
      <p className={styles.subtitle}>{data.text_1}</p>
      <hr className={styles.divider} />
      <h1 className={styles.main_title}>
        <span
          className={styles.main_title_word1}
        >{`${data.words[0].word} `}</span>
        <span className={styles.main_title_word2}>
          {`${data.words[1].word} `}
        </span>
        <span
          className={styles.main_title_word3}
        >{`${data.words[2].word}`}</span>
      </h1>
      <hr className={styles.divider} />
      <p className={styles.subtitle}>{data.text_2}</p>
    </section>
  );
}

export default Block1;
