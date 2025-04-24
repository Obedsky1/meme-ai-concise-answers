
import MemeBackground from '../components/MemeBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MemeBackground />
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
