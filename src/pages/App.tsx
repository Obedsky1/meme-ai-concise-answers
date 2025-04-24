
import Navbar from '../components/Navbar';
import MemeBackground from '../components/MemeBackground';
import AIInputForm from '../components/AIInputForm';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MemeBackground className="opacity-5" />
      <Navbar />
      <main className="flex-grow flex items-stretch p-0">
        <div className="w-full max-w-screen-2xl mx-auto flex flex-col">
          <AIInputForm />
        </div>
      </main>
    </div>
  );
};

export default App;
