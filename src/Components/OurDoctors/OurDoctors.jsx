import style from './_OurDoctors.module.scss';
import Doctor from '../Doctor/Doctor';
import TitleCards from '../TitleCards/TitleCards';
import Image from 'next/image';
import line from '../../../public/images/Line1.png'


const OurDoctors = ({ doctors }) => {
    const href = '/doctors'
    return (
        <section className={style.ourDoctors}>
            <div className={style.ground_line}>
                <Image src={line} alt="line" width={1000} height={1000} priority />
            </div>
            <div className="container">
                <TitleCards slug={href}>Həkimlər</TitleCards>
                <div className={style.cards}>
                    {
                        doctors.slice(0, 4).map(item => {
                            return (
                                <Doctor key={item._id} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurDoctors