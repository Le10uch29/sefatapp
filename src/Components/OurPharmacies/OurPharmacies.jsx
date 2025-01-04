import style from './_OurPharmacies.module.scss'
import TitleCards from '../TitleCards/TitleCards'
import Pharmacy from '../Pharmacy/Pharmacy'

const OurPharmacies = ({pharmacies}) =>{
    const href = '/pharmacies'

    return(
        <section className={style.ourPharmacies}>
            <div className="container">
                <TitleCards slug={href}>    
                Aptekler
                </TitleCards>
                <div className={style.cards}>
                   {
                    pharmacies.slice(0,4).map(item => {
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

export default OurPharmacies