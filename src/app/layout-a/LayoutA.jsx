import HeroA from '@/components/layouts/layoutA/HeroA';
import WhyChooseA from '@/components/layouts/layoutA/WhyChooseA';
import OurTeamA from '@/components/layouts/layoutA/OurTeamA';
import TechnologiesSectionA from '@/components/layouts/layoutA/TechnologiesSectionA';
import Cta from '@/components/layouts/layoutA/Cta';
import TextSlider from '@/components/layouts/layoutA/TextSlider';
import ComprehensiveServices from '@/components/layouts/layoutA/ComprehensiveServices';
import CommonConditions from '@/components/layouts/layoutA/CommonConditions';

export default function LayoutA({ hero, whyChoose, team,technologies, ctaSection ,highlightText ,comprehensiveCare , scopeOfCare}) {
  return (
    <div>
      <HeroA hero={hero} />
      <TextSlider highlightText={highlightText} />
      <WhyChooseA whyChoose={whyChoose} />
      <OurTeamA team={team} />
      <TechnologiesSectionA data={technologies} />
      <Cta ctaSection={ctaSection} />
      <TextSlider highlightText={highlightText} />
      <ComprehensiveServices comprehensiveCare={comprehensiveCare} />
      <CommonConditions scopeOfCare={ scopeOfCare } />

    </div>
  );
}
