import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Portfolio } from '../components/Portfolio';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Portfolio />
      <Stats />
      <Testimonials />
    </>
  );
}

export default Home;
