import React from 'react';
import HomeHero from '../components/home/HomeHero';
import TrustBar from '../components/home/TrustBar';
import AboutPreview from '../components/home/AboutPreview';
import PrincipalMessageSection from '../components/home/PrincipalMessageSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import AcademicsPreview from '../components/home/AcademicsPreview';
import FacilitiesPreview from '../components/home/FacilitiesPreview';
import SchoolLifePreview from '../components/home/SchoolLifePreview';
import NewsPreview from '../components/home/NewsPreview';
import AdmissionCTA from '../components/home/AdmissionCTA';

export default function Home() {
  return (
    <main id="main-content" className="w-full">
      <HomeHero />
      <TrustBar />
      <AboutPreview />
      <PrincipalMessageSection />
      <WhyChooseSection />
      <AcademicsPreview />
      <FacilitiesPreview />
      <SchoolLifePreview />
      <NewsPreview />
      <AdmissionCTA />
    </main>
  );
}
