import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import styles from './ShortAbout.module.scss';


function ShortAbout() {
    return (
        <section style={{ position: "relative" }}>

            <div className="continer">
                <div className={styles.container}>

                    <h2 className={styles.title}>Haqqımızda</h2>
                    <p className={styles.content}>Bizim onlayn qəbul portalımız, sizə ən yaxşı tibbi xidmətləri təqdim etmək üçün yaradılmışdır. Məqsədimiz, keyfiyyətli və rahat tibbi yardımı hər kəsə əlçatan etməkdir. Peşəkar həkimlərimiz və təcrübəli tibbi personalımız, sizin sağlamlığınızı qorumaq və yaxşılaşdırmaq üçün həmişə yanınızdadır.</p>
                    <Link href="#" className={styles.btn} ><span className={styles.more}>Daha çox</span><FaArrowRight className={styles.icon} /></Link>
                </div>
            </div>
        </section>
    )
}

export default ShortAbout