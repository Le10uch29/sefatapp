import styles from './_doctor_comments.module.scss'
import { DoctorCommentItem } from './item'
export function DoctorComments(params) {
 return (
    <div className="container">
           <h2 className={styles.comments}>Rəylər</h2>

           <div className={styles.DoctorComment}>
        <DoctorCommentItem/>
        <DoctorCommentItem/>
        <DoctorCommentItem/>
        <DoctorCommentItem/>
        <DoctorCommentItem/>
        <DoctorCommentItem/>
        <DoctorCommentItem/>

    </div>

    <div className={styles.seeMoreButton}>
        <button>Daha çox</button>
    </div>

    <div className={styles.commentsFormWrapper}>
        <form action="">
            <div>
                <input type="text" placeholder='Rəyinizi əlavə edin..' />
                <button>Göndər</button>
            </div>
        </form>
    </div>
    </div>

 )
}