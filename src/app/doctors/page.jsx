"use client";

import Banner from "@/components/Banner/Banner";
import DoctorAboutSection from "@/components/Doctor-about-section/DoctorAboutSection";
import DoctorDetails from "@/components/doctor-details/DoctorDetails";
import { DoctorComments } from "@/components/DoctorComments/doctorComments";
import OurDoctors from "@/components/OurDoctors/OurDoctors";
import PricePortfolioSection from "@/components/Price-portfolio-section/PricePortfolioSection";
import { getDoctor, getDoctors } from "@/redux/slices/doctorsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Doctor = ({ params }) => {
  const dispatch = useDispatch();
  const { doctor } = useSelector((state) => state.doctors);
  const { doctors } = useSelector((state) => state.doctors);
  const id = params.doctor;
  useEffect(() => {
    dispatch(getDoctor(id));
    dispatch(getDoctors());
  }, []);

  return (
    <main>
      <DoctorDetails doctor={doctor} />
      <DoctorAboutSection doctor={doctor} />
      <PricePortfolioSection />
      <OurDoctors doctors={doctors} />
      <Banner />
      <div className="container">
        <DoctorComments />
      </div>
    </main>
  );
};

export default Doctor;
