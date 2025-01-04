import Clinic from '../Clinic/Clinic'
import style from './_Clinics.module.scss'

const ClinicsPage = ({clinics}) => {
    return(
        <section className={style.clinics}>
            <div className="container">
                <div className={style.cards}>
                    {
                        clinics.map(item => {
                            return(
                                <Clinic key={item._id} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ClinicsPage