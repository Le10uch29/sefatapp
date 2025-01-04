import { Fragment } from 'react';
import Comment from '../CommentCard/Comment';
import styles from './ShortComment.module.scss';
import Indicator from '@/components/Indiqator/Indigator'

const ShortCommnet = ({ comments }) => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h3 className={styles.title}>
                    <span className={styles.one}>Pasiyent Rəyləri:</span>
                    <span className={styles.two}>Diqqət etdiyimiz şəxslərdən eşitin</span>
                </h3>
                <div className={styles.cards}>
                    {comments?.map((item, index) => {
                        if (index == 2) {
                            return (<Fragment key={item._id}>
                                <Indicator />
                                <Comment item={item} />
                            </Fragment>)
                        }
                        else { return (<Comment key={item._id} item={item} />) }
                    })}
                </div>
            </div>
        </section>
    )
}

export default ShortCommnet