import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Prices } from '@/components/prices'
import { WhyUs } from '@/components/why-us'
import { Portfolio } from '@/components/portfolio'
import { Reviews } from '@/components/reviews'
import { About } from '@/components/about'
import { Location } from '@/components/location'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Prices />
        <WhyUs />
        <Portfolio />
        <Reviews />
        <About />
        <Location />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
