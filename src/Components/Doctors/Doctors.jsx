import Doctor from '../Doctor/Doctor'
import style from './_Doctors.module.scss'


const DoctorsPage = ({ doctors }) => {

    return (
        <section className={style.doctors}>

            <div className="container">
                <div className={style.cards}>
                    {
                        doctors.map(item => {
                            return (
                                <Doctor key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default DoctorsPage