import Image from 'next/image';
import styles from './_item.module.scss';
import Link from 'next/link';

export function BlogItem({item}){
    const { _id, name, description, imageURL } = item
    return (
        <Link href={"blogs/"+_id} className={styles.blogItem}>
            <div className={styles.imagesCover}>  <Image src={'/images/blogList.jpeg'} layout='fill' alt='clinic' /></div>
            <div className={styles.content}>
                <h3>{name}</h3>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}