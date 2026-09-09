import Hero from '../sections/Hero.jsx'
import HowItWorks from '../sections/HowItWorks.jsx'
import Discover from '../sections/Discover.jsx'
import HscSpecialties from '../sections/HscSpecialties.jsx'
import ParentFeatures from '../sections/ParentFeatures.jsx'
import TwoExperiences from '../sections/TwoExperiences.jsx'
import PricingTeaser from '../sections/PricingTeaser.jsx'
import FinalCta from '../sections/FinalCta.jsx'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Discover />
      <HscSpecialties />
      <ParentFeatures />
      <TwoExperiences />
      <PricingTeaser />
      <FinalCta />
    </main>
  )
}
