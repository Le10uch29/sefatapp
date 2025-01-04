'use client'
import PharmaciesPage from "@/components/Pharmacies/Pharmacies"
import { getPharmacies } from "@/redux/slices/pharmaciesSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Pharmacies = () => {
    const dispatch = useDispatch()
    const { pharmacies } = useSelector(state => state.pharmacies)

    useEffect(() => {
        dispatch(getPharmacies())
    }, [])
    return (
        <main>
            <PharmaciesPage pharmacies={pharmacies} />
        </main>
    )
}

export default Pharmacies