import { Navigation } from '../components/Navigation';
import ZanzibarBackground from '../components/backgrounds/ZanzibarBackground';
import ZanzibarEditorial from '../components/ZanzibarEditorial';
import Footer from '../components/Footer';

export default function Zanzibar() {
  return (
    <>
      <Navigation />
      <ZanzibarBackground />
      <ZanzibarEditorial />
      <Footer />
    </>
  );
}
