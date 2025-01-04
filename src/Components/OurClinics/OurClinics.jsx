import style from './_OurClinics.module.scss';
import TitleCards from '../TitleCards/TitleCards';
import Image from 'next/image';
import line from '../../../public/images/Line1.png'
import Clinic from '../Clinic/Clinic';


const OurClinics = ({ clinics }) => {
    const href = '/clinics';
    return (
        <section className={style.ourClinics}>
            <div className={style.ground_line}>
                <Image src={line} alt="line" width={1000} height={1000} priority />
            </div>
            <div className="container">
                <TitleCards slug={href}>Klinikalar</TitleCards>
                <div className={style.cards}>
                    {
                        clinics?.slice(0, 4).map(item => {
                            return (
                                <Clinic key={item._id} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurClinics