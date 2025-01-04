import Image from 'next/image'
import styles from './_doctor_comments.module.scss'
import StarIcon from '@mui/icons-material/Star';
export function DoctorCommentItem(params) {
    return (
        <div className={styles.item}>
            <div className={styles.firstItem}>
                <div className={styles.imageWrapper}>
                    <Image src={'/images/comment_user.jpg'} width={79} height={79} />
                </div>
            </div>
            <div className={styles.content}>
                <h4>Fatima Huseynova</h4>

                <div className={styles.starIcon}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <div>

                    <p>Lorem ipsum dolor sit amet consectetur. At pretium turpis egestas vitae. Urna elit arcu et sagittis nisl. Id volutpat feugiat egestas orci facilisis blandit. Vitae suspendisse blandit interdum phasellus.</p>
                </div>
            </div>
        </div>
    )
}