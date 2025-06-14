import styles from './styles.module.css'

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.workTime}`} />
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`} />
        <span className={`${styles.cycleDot} ${styles.workTime}`} />
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`} />
        <span className={`${styles.cycleDot} ${styles.workTime}`} />
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`} />
        <span className={`${styles.cycleDot} ${styles.workTime}`} />
        <span className={`${styles.cycleDot} ${styles.longBreakTIme}`} />
      </div>
    </div>
  )
}