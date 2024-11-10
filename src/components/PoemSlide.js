// src/components/PoemSlide.js
import React from 'react';
import styled from 'styled-components';

const poemLines = [
  "On November 11, an angel was born,",
  "Just like that special number, a sign forewarned.",
  "How could I resist? Your humor, your charm,",
  "Dark jokes that made me laugh, your wit so disarmed.",

  "I'd sneak in late, avoid the seat next to you,",
  "But fate had plans; close was where I wanted to be too.",
  "Thanks to Nigger, your heart found mine,",
  "And that unknown request brought the first sign.",

  "At 10:30 each night, I'd wait in delight,",
  "For a reel you'd send, my heart feeling light.",
  "A girl who'd sleep before eleven, it’s true,",
  "Stayed up till two, just to talk with you.",

  "The office once dull is a garden in bloom,",
  "Just by you filling each space in the room.",
  "Your smile, those thick brows, that soft fluffy pout,",
  "From jiggly cheeks to thunder thighs, I could go on about!",

  "May 4 came, and there it was—",
  "You confessed, and I knew, my love was because.",
  "In Munnar you stood, while I stayed in PG,",
  "The miles didn’t matter, it was just you and me.",

  "May 5 we met, nervous yet bold,",
  "To Kaveri Park, our story unfolds.",
  "Your arm around me, I leaned in tight,",
  "A hug and a kiss, our hearts felt just right.",

  "Though you forgot my chocolate treat,",
  "That first day’s memory, forever sweet.",
  "Then came May 11, our first secret date,",
  "At dawn we made out—oh, the thrill was great!",

  "From beach waves to mushroom soup we’d drink,",
  "In the theater seats, to us, time seemed to shrink.",
  "In our matching green, we laughed and held tight,",
  "“Up” moved me to tears, you held me that night.",

  "“Let’s live till 69!” you’d joke with a grin,",
  "With your love beside me, I'd gladly give in.",
  "From BSR to Mayajaal, our secret delight,",
  "Just making memories, holding you tight.",

  "Beach dates with spring potatoes and Gobi bites,",
  "Watching you savor every delicious delight.",
  "Our food street strolls, “I Love Food Mall,”",
  "Dominos and Geetham, together through it all.",

  "Sixty-nine years is all that I ask,",
  "With you, two babies, and a dog as our task.",
  "Rohee and Russel, our family complete,",
  "Though dogs scare me, with you it’s sweet.",

  "Happy birthday, my love, my darling, my friend,",
  "With you, my love, there’s no end.",
  "From 11:11 to every reel’s start,",
  "Know you’re the keeper of my heart."
];

const PoemSlide = () => {
  return (
    <PoemContainer>
      {poemLines.map((line, index) => (
        <PoemLine key={index}>{line}</PoemLine>
      ))}
    </PoemContainer>
  );
};

const PoemContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  margin: 20px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 50%; /* Centered width */
`;

const PoemLine = styled.h2`
  transition: transform 0.3s ease;
  margin: 10px 0;
  text-align: center; /* Center text */
`;

export default PoemSlide;
