import styles from "./Skeleton.module.css"

export default function Skeleton() {
  return (
    <div className={styles.skeleton} role="status" aria-busy="true" aria-label="Loading">
      <div className={styles.header}>
        <div className={styles.avatar} />
        <div className={styles.headerLines}>
          <div className={styles.line} />
          <div className={`${styles.line} ${styles.short}`} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.lineThick} />
        <div className={styles.lineThick} />
        <div className={`${styles.lineThick} ${styles.shorter}`} />
      </div>
    </div>
  )
}
