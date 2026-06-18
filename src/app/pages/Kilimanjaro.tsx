import { Navigation } from '../components/Navigation';
import KilimanjaroBackground from '../components/backgrounds/KilimanjaroBackground';
import KilimanjaroEditorial from '../components/KilimanjaroEditorial';
import Footer from '../components/Footer';

export default function Kilimanjaro() {
  return (
    <>
      <Navigation />
      <KilimanjaroBackground />
      <KilimanjaroEditorial />
      <Footer />
    </>
  );
}
