import styles from "./styles.module.css";

export default function Card({ id, title, releaseYear, description, coverImage, onRemove }) {
  const handleSearch = () => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(title)}`;
    window.open(searchUrl, "_blank");
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={coverImage} alt={title} className={styles.cover} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>
          {title} {releaseYear && <span className={styles.year}>({releaseYear})</span>}
        </h3>

        {description && <p className={styles.description}>{description}</p>}

        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={handleSearch}>
            Saiba mais
          </button>
          <button className={styles.removeButton} onClick={() => onRemove(id)}>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}