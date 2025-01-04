import { getClinic } from "@/app/lib/clinicDetailHook";
import Banner from "@/components/Banner/Banner";
import ClinicDetails from "@/components/clinic-details/clinicDetail";
import DoctorAboutSection from "@/components/Doctor-about-section/DoctorAboutSection";
import DoctorDetails from "@/components/doctor-details/DoctorDetails";
import { DoctorComments } from "@/components/DoctorComments/doctorComments";
import OurDoctors from "@/components/OurDoctors/OurDoctors";
import PricePortfolioSection from "@/components/Price-portfolio-section/PricePortfolioSection";

export default async function ClinicDetailPage({params}){
    const {id} = params

    
    const clinic =  await getClinic(id);
    return(
        <main>
            <ClinicDetails clinic={clinic} />
            <DoctorAboutSection doctor={clinic} />
            <PricePortfolioSection />
            {/* <OurDoctors doctors={doctors} /> */}
            <Banner />
            <div className="container">
            <DoctorComments/>
            </div>
        </main>
    );
}