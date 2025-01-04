import Image from 'next/image';
import styles from './_Clinic.module.scss';
import Link from 'next/link';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function Clinic({ item }) {
    const { _id, name, location, imageURL, rating } = item
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <Image src={imageURL} width={1000} height={1000} alt='clinic' />
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.address}>{location.address}</p>
                <div className={styles.services}>
                    <span className={styles.service}>Ümumi yoxlanış</span>
                    <span className={styles.service}>USM</span>
                    <span className={styles.service}>MRT</span>
                    <span className={styles.service}>Laboratoriya</span>
                </div>
                <div className={styles.rating_comment}>
                    <span className={styles.rating}>
                        <Rating
                            value={rating}
                            precision={0.1}
                            readOnly
                            icon={<StarIcon sx={{ fontSize: 18, color: "#ffd557" }} />}
                            emptyIcon={<StarIcon sx={{ fontSize: 18 }} />}
                        />
                    </span>
                    <span className={styles.comment_count}>15 rəy</span>
                </div>
                <Link href={"/clinics/"+_id} className={styles.link}>Ətraflı</Link>
            </div>

        </div>
    )
}

export default Clinic