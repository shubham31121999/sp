
import MinimalAccessSurgeryData from '@/data/departments/layoutA/MinimalAccessSurgeryData';
import HeroA from '@/components/layouts/layoutA/HeroA';
import WhyChooseA from '@/components/layouts/layoutA/WhyChooseA';
import OurTeamA from '@/components/layouts/layoutA/OurTeamA';
import TechnologiesSectionA from '@/components/layouts/layoutA/TechnologiesSectionA';
import Cta from '@/components/layouts/layoutA/Cta';
import TextSlider from '@/components/layouts/layoutA/TextSlider';
import ComprehensiveServices from '@/components/layouts/layoutA/ComprehensiveServices';
import CommonConditions from '@/components/layouts/layoutA/CommonConditions';
import InsuranceAndFinance from '@/components/layouts/layoutA/InsuranceAndFinance';
import PatientJourney from '@/components/layouts/layoutA/PatientJourney';
import SuccessStories from '@/components/layouts/layoutA/SuccessStories';
import Faq from '@/components/layouts/layoutA/Faq';
import AppointmentConsultation from '@/components/layouts/layoutA/AppointmentConsultation';

// Page component for the Critical Care department
function Page(hero, whyChoose, team,technologies, ctaSection ,highlightText ,comprehensiveCare , scopeOfCare ,insuranceFinance ,patientJourney, successStories, faqs, appointmentSection) {
  return (
    <div>
      <HeroA hero={MinimalAccessSurgerySurgeryData.hero} />
      <TextSlider highlightText={MinimalAccessSurgeryData.highlightText} />
      <WhyChooseA whyChoose={MinimalAccessSurgeryData.whyChoose} />
      <OurTeamA team={MinimalAccessSurgeryData.team} />
      <TechnologiesSectionA data={MinimalAccessSurgeryData.technologies} />
      <Cta ctaSection={MinimalAccessSurgeryData.ctaSection} />
      <TextSlider highlightText={MinimalAccessSurgeryData.highlightText} />
      <ComprehensiveServices comprehensiveCare={MinimalAccessSurgeryData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ MinimalAccessSurgeryData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ MinimalAccessSurgeryData.insuranceFinance}/>
      <PatientJourney patientJourney={MinimalAccessSurgeryData.patientJourney} />
      <SuccessStories successStories={MinimalAccessSurgeryData.successStories} />
      <Faq faqs={MinimalAccessSurgeryData.faqs} />
      <AppointmentConsultation appointmentSection={MinimalAccessSurgeryData.appointmentSection} />
    </div>
  );
}

export default Page;



