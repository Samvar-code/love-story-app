import React from 'react';
import { useInView } from 'react-intersection-observer';

const ImageItem = ({ image, isLeft }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-8`}
    >
      <div
        className={`transition-opacity duration-1000 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={`/photos/${image.filename}`}
          alt={image.alt}
          className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-lg w-full"
        />
      </div>
    </div>
  );
};

const BirthdayWebsite = () => {
  // Create array of image objects with actual filenames
  const images = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    filename: `photo${i + 1}.png`,
    alt: `Memory ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="text-center py-8 bg-pink-100 shadow-lg">
        <h1 className="text-4xl font-bold text-pink-800 mb-2">
          To My Love, My Angel Born on 11:11
        </h1>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Poem section */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-12">
          <div className="whitespace-pre-line text-pink-900 leading-relaxed text-lg">
            On November 11, an angel was born,
            Just like that special number, a sign forewarned.
            How could I resist? Your humor, your charm,
            Dark jokes that made me laugh, your wit so disarmed.

            I'd sneak in late, avoid the seat next to you,
            But fate had plans; close was where I wanted to be too.
            Thanks to Yuvan's tunes, your heart found mine,
            And that unknown request brought the first sign.

            At 10:30 each night, I'd wait in delight,
            For a reel you'd send, my heart feeling light.
            A girl who'd sleep before eleven, it's true,
            Stayed up till two, just to talk with you.

            The office once dull is a garden in bloom,
            Just by you filling each space in the room.
            Your smile, those thick brows, that soft fluffy pout,
            From jiggly cheeks to thunder thighs, I could go on about!

            May 4 came, and there it was—
            You confessed, and I knew, my love was because.
            In Munnar you stood, while I stayed in PG,
            The miles didn't matter, it was just you and me.

            May 5 we met, nervous yet bold,
            To Kaveri Park, our story unfolds.
            Your arm around me, I leaned in tight,
            A hug and a kiss, our hearts felt just right.

            Though you forgot my chocolate treat,
            That first day's memory, forever sweet.
            Then came May 11, our first secret date,
            At dawn we made out—oh, the thrill was great!

            From beach waves to mushroom soup we'd drink,
            In the theater seats, to us, time seemed to shrink.
            In our matching green, we laughed and held tight,
            "Up" moved me to tears, you held me that night.

            "Let's live till 69!" you'd joke with a grin,
            With your love beside me, I'd gladly give in.
            From BSR to Mayajaal, our secret delight,
            Just making memories, holding you tight.

            Beach dates with spring potatoes and Gobi bites,
            Watching you savor every delicious delight.
            Our food street strolls, "I Love Food Mall,"
            Dominos and Geetham, together through it all.

            Sixty-nine years is all that I ask,
            With you, two babies, and a dog as our task.
            Rohee and Russel, our family complete,
            Though dogs scare me, with you it's sweet.

            Happy birthday, my love, my darling, my friend,
            With you, my love, there's no end.
            From 11:11 to every reel's start,
            Know you're the keeper of my heart.
          </div>
        </div>

        {/* Photo gallery */}
        <div className="max-w-6xl mx-auto">
          {images.map((image, index) => (
            <ImageItem
              key={image.id}
              image={image}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-pink-100 mt-12">
        <p className="text-pink-800">Made with ❤️ for you</p>
      </footer>
    </div>
  );
};

export default BirthdayWebsite;