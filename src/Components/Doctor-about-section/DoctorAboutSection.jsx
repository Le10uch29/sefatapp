import React from 'react'
import styles from './DoctorAboutSection.module.scss';
import { IoPersonSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BiSolidMessageDots } from "react-icons/bi";
import Link from 'next/link';

function DoctorAboutSection({ doctor }) {
    const { rating } = doctor
    return (
        <section className={styles.section}>
            <div className='container'>
                <div className={styles.shows}>
                    <div className={styles.show}>
                        <div className={styles.icon_con}>
                            <IoPersonSharp className={styles.icon} />
                        </div>
                        <span className={styles.title}>116</span>
                        <span className={styles.content}>Pasientlər</span>
                    </div>
                    <div className={styles.show}>
                        <div className={styles.icon_con}>
                            <FaStar className={styles.icon} />
                        </div>
                        <span className={styles.title}>{rating}</span>
                        <span className={styles.content}>Retinq</span>
                    </div>
                    <div className={styles.show}>
                        <div className={styles.icon_con}>
                            <BiSolidMessageDots className={styles.icon} />
                        </div>
                        <span className={styles.title}>93</span>
                        <span className={styles.content}>Rəy</span>
                    </div>
                </div>

                <div className={styles.about}>
                    <h4 className={styles.about_title}>Haqqımda</h4>
                    <p className={styles.about_content}>Dr. Ali Uzair is the top most cardiologist specialist in Crist Hospital in London, UK. He achived several awards for her wonderful contribution Haqqında: Lorem ipsum dolor sit amet consectetur. Nisl leo laoreet cursus dis tellus amet nec sit. In sed enim quis suspendisse porta sit quis arcu amet. Sed accumsan eget at pulvinar. Enim erat consectetur sapien congue. Non pharetra iaculis vel faucibus amet suscipit a et. Urna diam nisl ipsum massa duis praesen <button className={styles.about_btn} >Daha çox oxu...</button></p>
                </div>
            </div>
        </section>
    )
}

export default DoctorAboutSection