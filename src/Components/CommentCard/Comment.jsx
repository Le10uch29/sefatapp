import Image from 'next/image';
import styles from './Comment.module.scss'

const Comment = ({ item }) => {
    const { _id, userId, userName, imgURL, comment } = item;
    const name = userName.split(" ")[0] + " " + userName.split(" ")[1].slice(0, 1);

    return (
        <div className={styles.border}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <Image src={imgURL} alt='user' width={1000} height={1000} priority />
                </div>
                <div className={styles.content}>
                    <p className={styles.comment}>{`"${comment}"`}</p>
                    <span className={styles.name}>{`- ${name}.`}</span>
                </div>
            </div>
        </div>
    )
};

export default Comment;