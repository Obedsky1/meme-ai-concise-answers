
import Navbar from '../components/Navbar';
import MemeBackground from '../components/MemeBackground';
import AIInputForm from '../components/AIInputForm';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MemeBackground className="opacity-10" />
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-screen-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient">Ask Anything</h2>
          <p className="text-center text-muted-foreground mb-8">
            Get straight-to-the-point answers with no fluff
          </p>
          <AIInputForm />
        </div>
      </main>
    </div>
  );
};

export default App;
