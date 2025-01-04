import Image from 'next/image';
import React from 'react'
import styles from './DoctorDetails.module.scss';
import Arrow from '../../../public/images/Arrow.png'
import { IoMdStar } from "react-icons/io";
import Dropdown from '../ui/Dropdown';
import Button from '../ui/Button/Button';
import SecondaryButton from '../ui/SecondaryButton/Button';
import { ModalUI } from '../ui/Modal/Modal';

function DoctorDetails({ doctor }) {
    const { _id, name, surname, specialty, imageURL, hospitalName, rating } = doctor;
    return (
        <section className={styles.section}>
            <div className='container'>
                <div className={styles.container}>
                    <div className={styles.img_content}>
                        <div className={styles.doctor}>
                            {/* {imageURL ? <Image src={imageURL} width={1000} height={1000} alt='doctor' priority /> : ""} */}
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.name}>{name ? name + " " + surname : "loading..."}</h3>
                            <span className={styles.specialty}>{specialty ? specialty : ""}</span>
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
                        {/* <button className={styles.btn}>Xidmətlər <Image className={styles.icon} src={Arrow} width={1000} height={1000} alt='arrow' priority /></button> */}
                   <Dropdown 
                    items={[
                        {value:1,label:'Rezervasiya'},
                        {value:14,label:'Resept'},
                        {value:6,label:"Analiz nəticələri"}
                    ]}
                    placeholder='Xidmətlər'
                    ButtonComponent={SecondaryButton}/>
                  
                    </ul>
                </div>
            </div>
            <ModalUI/>
        </section>
    )
}

export default DoctorDetails