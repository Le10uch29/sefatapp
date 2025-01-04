import styles from './Indigator.module.scss';

const Indigator = () => {
    return (
        <div className={styles.indigator}>
            <div className={styles.card}>
                <span className={styles.counter}>10,000+</span>
                <span className={styles.label}>Successful Consultations</span>
            </div>
            <div className={styles.card}>
                <span className={styles.counter}>2,500+</span>
                <span className={styles.label}>Healthcare Professionals</span>
            </div>
            <div className={styles.card}>
                <span className={styles.counter}>98%</span>
                <span className={styles.label}>Patient Satisfaction Rate</span>
            </div>
            <div className={styles.card}>
                <span className={styles.counter}>200+</span>
                <span className={styles.label}>Top Specialists</span>
            </div>
        </div>
    )
};

export default Indigator;