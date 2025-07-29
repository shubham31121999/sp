"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CareerHero from "@/components/Career/CareerHero";
import CareerFaq from "@/components/Career/CareerFaq";
import CareerStreams from "@/components/Career/CareerStreams";
import EmployeeBenefit from "@/components/Career/EmployeeBenefit";
import CareerTraining from "@/components/Career/CareerTraining";

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <CareerHero />
      <CareerFaq />
      <CareerStreams />
      <EmployeeBenefit />
      <CareerTraining />
    </>
  );
};

export default Page;
