
import { useEffect, useState } from 'react';

// Array of meme backgrounds
const memeBackgrounds = [
  '/meme-background-1.jpg',
  '/meme-background-2.jpg',
  '/meme-background-3.jpg',
  '/meme-background-4.jpg',
  // Actually using placeholders until we have real meme images
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
  'https://images.unsplash.com/photo-1500673922987-e212871fec22',
];

interface MemeBackgroundProps {
  className?: string;
}

const MemeBackground = ({ className = '' }: MemeBackgroundProps) => {
  const [currentMeme, setCurrentMeme] = useState('');
  
  useEffect(() => {
    // Select a random meme background on mount
    const randomIndex = Math.floor(Math.random() * memeBackgrounds.length);
    setCurrentMeme(memeBackgrounds[randomIndex]);
  }, []);

  if (!currentMeme) return null;

  return (
    <div 
      className={`absolute inset-0 w-full h-full opacity-30 z-[-1] ${className}`}
      style={{
        backgroundImage: `url(${currentMeme})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default MemeBackground;
