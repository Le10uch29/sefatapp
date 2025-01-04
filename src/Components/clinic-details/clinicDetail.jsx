import Image from 'next/image';
import React from 'react'
import styles from './ClinicDetails.module.scss';
import Arrow from '../../../public/images/Arrow.png'
import { IoMdStar } from "react-icons/io";

function ClinicDetails({ clinic }) {
    const { _id, name, surname, specialty, imageURL, hospitalName, rating, location } = clinic;
    return (
        <section className={styles.section}>
            <div className='container'>
                <div className={styles.container}>
                    <div className={styles.img_content}>
                        <div className={styles.doctor}>
                            {imageURL ? <Image src={imageURL} width={1000} height={1000} alt='doctor' priority /> : ""}
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.name}>{name ? name + " "  : "loading..."}</h3>
                            <span className={styles.specialty}>{location ? location?.address : ""}</span>
                            <span className={styles.hospitalName}>{hospitalName ? hospitalName : ""}</span>

                            {rating ?
                                <div className={styles.star_rating_comment}>
                                    <IoMdStar className={styles.star} />
                                    <span className={styles.rating}>{rating}</span>
                                    <span className={styles.comment_count}>93 pasient rəyi</span>
                                </div> : ""}
                        </div>
                    </div>


                    <ul className={styles.services}>
                        <button className={styles.btn}>Şöbələr <Image className={styles.icon} src={Arrow} width={1000} height={1000} alt='arrow' priority /></button>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ClinicDetails