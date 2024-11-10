import React, { useEffect, useState } from 'react';
import './styles.css';

const App = () => {
  const [visiblePhotos, setVisiblePhotos] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisiblePhotos(prev => new Set([...prev, entry.target.id]));
          } else {
            setVisiblePhotos(prev => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    document.querySelectorAll('.photo-container').forEach(photo => {
      observer.observe(photo);
    });

    return () => observer.disconnect();
  }, []);

  const photos = Array.from({ length: 22 }, (_, i) => `photo${i + 1}.png`);

  const renderPoem = () => {
    const lines = `
    To My Love, My Angel Born on 11:11
    On November 11, an angel was born,  
    Just like that special number, a sign forewarned.  
    How could I resist? Your humor, your charm,  
    Dark jokes that made me laugh, your wit so disarmed.  
    I'd sneak in late, avoid the seat next to you,  
    But fate had plans; close was where I wanted to be too.  
    Thanks to Yuvan’s tunes, your heart found mine,  
    And that unknown request brought the first sign.  
    At 10:30 each night, I'd wait in delight,  
    For a reel you'd send, my heart feeling light.  
    A girl who'd sleep before eleven, it’s true,  
    Stayed up till two, just to talk with you.  
    The office once dull is a garden in bloom,  
    Just by you filling each space in the room.  
    Your smile, those thick brows, that soft fluffy pout,  
    From jiggly cheeks to thunder thighs, I could go on about!  
    May 4 came, and there it was—  
    You confessed, and I knew, my love was because.  
    In Munnar you stood, while I stayed in PG,  
    The miles didn’t matter, it was just you and me.  
    May 5 we met, nervous yet bold,  
    To Kaveri Park, our story unfolds.  
    Your arm around me, I leaned in tight,  
    A hug and a kiss, our hearts felt just right.  
    Though you forgot my chocolate treat,  
    That first day’s memory, forever sweet.  
    Then came May 11, our first secret date,  
    At dawn we made out—oh, the thrill was great!  
    From beach waves to mushroom soup we’d drink,  
    In the theater seats, to us, time seemed to shrink.  
    In our matching green, we laughed and held tight,  
    “Up” moved me to tears, you held me that night.  
    “Let’s live till 69!” you’d joke with a grin,  
    With your love beside me, I'd gladly give in.  
    From BSR to Mayajaal, our secret delight,  
    Just making memories, holding you tight.  
    Beach dates with spring potatoes and Gobi bites,  
    Watching you savor every delicious delight.  
    Our food street strolls, “I Love Food Mall,”  
    Dominos and Geetham, together through it all.  
    Sixty-nine years is all that I ask,  
    With you, two babies, and a dog as our task.  
    Rohee and Russel, our family complete,  
    Though dogs scare me, with you it’s sweet.  
    Happy birthday, my love, my darling, my friend,  
    With you, my love, there’s no end.  
    From 11:11 to every reel’s start,  
    Know you’re the keeper of my heart`.split('\n');

    return lines.map((line, index) => {
      if (line.startsWith('**')) {
        return <h1 key={index}>{line.replace(/\*\*/g, '')}</h1>;
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div className="app">
      <div className="content">
        <div className="flex-container">
          <div className="left-images">
            {photos.map((photo, index) => (
              index % 2 === 0 ? (
                <div 
                  key={photo}
                  id={`photo-${index}`}
                  className={`photo-container ${visiblePhotos.has(`photo-${index}`) ? 'visible' : ''}`}
                >
                  <img 
                    src={`/photos/${photo}`} 
                    alt={`Memory ${index + 1}`}
                    className="photo"
                  />
                </div>
              ) : null
            ))}
          </div>
          <div className="poem-container">
            <div className="poem-content">
              {renderPoem()}
            </div>
          </div>
          <div className="right-images">
            {photos.map((photo, index) => (
              index % 2 !== 0 ? (
                <div 
                  key={photo}
                  id={`photo-${index}`}
                  className={`photo-container ${visiblePhotos.has(`photo-${index}`) ? 'visible' : ''}`}
                >
                  <img 
                    src={`/photos/${photo}`} 
                    alt={`Memory ${index + 1}`}
                    className="photo"
                  />
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
