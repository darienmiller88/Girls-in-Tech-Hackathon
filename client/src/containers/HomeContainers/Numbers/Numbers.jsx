import styles from "./Numbers.module.scss"

export default function Numbers() {
    return (
        <div className={styles.numbers}>
            <div className={styles.title}>2022 in Numbers</div>
            <div className={styles.reductions}>
                <div className={styles.stat_wrapper}>
                    <div className={styles.stat}>
                        22%
                    </div>
                    <div className={styles.stat_description}>Reduction in recidivism</div>
                </div>
                <div className={styles.stat_wrapper}>
                    <div className={styles.stat}>
                        48%
                    </div>
                    <div className={styles.stat_description}>Increase in employment rates at 36 months</div>
                </div>
                <div className={styles.stat_wrapper}>
                    <div className={styles.stat}>
                        25%
                    </div>
                    <div className={styles.stat_description}>Reduction in incarceration for new crime</div>
                </div>
            </div>
        </div>
    )
}
