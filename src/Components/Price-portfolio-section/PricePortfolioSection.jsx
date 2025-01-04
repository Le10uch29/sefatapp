import React from 'react';
import resept from '../../../public/images/icon-park-outline_medical-files.png';
import analiz from '../../../public/images/icon-park-outline_analysis.png'
import calendar from '../../../public/images/solar_calendar-outline.png'
import azn from '../../../public/images/azn.png'
import Image from 'next/image';
import styles from './PricePortfolioSection.module.scss'

function PricePortfolioSection() {
    return (
        <section className={styles.section}>
            <div className='container'>
                <div className={styles.price_cards}>
                    <div className={styles.card}>
                        <div>
                            <Image src={resept} width={1000} height={1000} alt='icon' priority className={styles.icon} />
                            <span><Image src={azn} width={100} height={100} alt='azn' priority className={styles.azn} /><span>50 azn</span></span>
                        </div>
                        <span>
                            Resept yazdır
                        </span>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <Image src={analiz} width={1000} height={1000} alt='icon' priority className={styles.icon} />
                            <span><Image src={azn} width={100} height={100} alt='azn' priority className={styles.azn} /><span>50 azn</span></span>
                        </div>
                        <span>
                            Analiz cavablarını yoxla
                        </span>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <Image src={calendar} width={1000} height={1000} alt='icon' priority className={styles.icon} />
                            <span><Image src={azn} width={100} height={100} alt='azn' priority className={styles.azn} /><span>50 azn</span></span>
                        </div>
                        <span>
                            Rezervasiya təyin et
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricePortfolioSection