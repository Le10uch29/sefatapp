import Image from 'next/image';
import styles from './ShortBlog.module.scss';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Doctor from '../../../public/images/Doctor-PNG.png'
import line from '../../../public/images/Line1.png'
import happy from '../../../public/images/happy.png'
import certified from '../../../public/images/certified.png'

const ShortBlog = () => {
    return (
        <section className={styles.section}>
            <div className={styles.ground_line}>
                <Image src={line} alt="line" width={1000} height={1000} priority />
            </div>
            <div className='container'>
                <div className={styles.container}>
                    <h2 className={styles.title}>Həkim və ya mütəxəssissinizsə, <br />
                        yeni xəstələr və müştərilər <br />
                        cəlb edin!</h2>

                    <Link href="/doctors" className={styles.link}>
                        <span className={styles.more}>Ətraflı</span>
                        <FaArrowRight className={styles.arrow} />
                    </Link>

                    <div className={styles.doctor_img}>
                        <Image src={Doctor} width={1000} height={1000} alt='doctor' priority />
                    </div>
                    <div className={styles.happy}>
                        <Image src={happy} width={1000} height={1000} alt='happy' priority />
                    </div>
                    <div className={styles.certified}>
                        <Image src={certified} width={1000} height={1000} alt='certified' priority />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ShortBlog;
