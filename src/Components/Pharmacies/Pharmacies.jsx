import Pharmacy from '../Pharmacy/Pharmacy'
import style from './_Pharmacies.module.scss'

const PharmaciesPage = ({pharmacies}) => {
    return(
        <section className={style.pharmacies}>
            <div className="container">
                <div className={style.cards}>
                    {
                        pharmacies.slice(0,8).map((item) => {
                            return(
                                <Pharmacy key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default PharmaciesPage