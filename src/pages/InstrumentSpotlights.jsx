import TopicPage from '../components/TopicPage.jsx';
import { instruments } from '../lib/images.js';

export default function InstrumentSpotlights() {
  return (
    <TopicPage
      path="/instrument-spotlights"
      header={{
        kicker: 'The voices of jazz',
        title: 'Instrument spotlights and their history',
        intro: 'Every instrument in a jazz ensemble carries its own history and its own argument about what music can be. A field guide to the voices that built the music.',
        image: instruments[0],
        imageAlt: 'A brass trumpet resting on a dark velvet surface',
      }}
      lead={[
        'The instruments of jazz did not arrive in the music as blank tools. Each came carrying its own history — the trumpet from the military band, the saxophone from a Belgian inventor\'s workshop, the piano from the parlors of the rising middle class — and each was transformed by musicians who refused to play it the way it was designed to be played.',
        'To study the instruments of jazz is to study a series of glorious misuses. Below we give each of the principal voices its due: where it came from, how jazz reinvented it, and the players who showed the world what it could say.',
      ]}
      gallery={[
        { src: instruments[1], alt: 'A saxophone catching warm stage light' },
        { src: instruments[2], alt: 'A double bass standing in a studio' },
        { src: instruments[3], alt: 'A drum kit on a small bandstand' },
        { src: instruments[4], alt: 'The keys of a grand piano in low light' },
      ]}
      sections={[
        {
          id: 'horns',
          title: 'The horns: trumpet and saxophone',
          paras: [
            'The trumpet came to jazz from the military and the marching band, and in the hands of Louis Armstrong it became the voice that taught the music to sing. Its brilliance and carrying power made it the natural lead instrument of the early ensembles, and its lineage runs straight through Roy Eldridge, Dizzy Gillespie, Miles Davis and beyond.',
            'The saxophone was barely a century old when jazz adopted it — neither fully brass nor fully woodwind, faintly disreputable in classical circles. In the hands of Coleman Hawkins it gained gravity; in the hands of Lester Young it learned to float; in the hands of Charlie Parker it learned to run faster than thought. The instrument did not change. The imagination applied to it did.',
          ],
        },
        {
          id: 'rhythm',
          title: 'The rhythm section: bass and drums',
          image: instruments[2],
          imageAlt: 'A double bass and drum kit set up on a stage',
          paras: [
            'The double bass moved, over a few decades, from being merely a timekeeper to a melodic and harmonic voice in its own right. Players like Jimmy Blanton and later Charles Mingus and Scott LaFaro proved that the bass could lead a conversation, not just anchor it.',
            'The drum kit is itself a jazz invention — assembling instruments from different traditions into one operator\'s reach. It became the engine and the conscience of the band, keeping time while also commenting, pushing, and occasionally exploding. From the crisp swing of Jo Jones to the polyrhythmic fire of Elvin Jones, the drummer shapes the entire feel of the music.',
          ],
        },
        {
          id: 'piano',
          title: 'The piano: an orchestra at the fingertips',
          paras: [
            'The piano spanned every role at once: rhythm, harmony, melody, and the architecture that holds them together. From the stride masters who could make a single instrument sound like a whole band, to the spare, surprising voicings of Thelonious Monk, to the impressionist washes of Bill Evans, the piano has been jazz\'s great laboratory of harmony.',
            'When you next listen to a recording, try following a single instrument across an entire track. Hear how it states, develops and surrenders an idea, how it listens to the others even while speaking. The history of jazz is, in the end, the history of these voices learning to converse in a language that did not exist until they invented it together.',
          ],
        },
      ]}
      accordionTitle="More on the instruments"
      accordions={[
        {
          title: 'The clarinet and the New Orleans sound',
          body: [
            'Before the saxophone dominated, the clarinet was the agile high voice of New Orleans jazz, weaving liquid lines above the trumpet and trombone in the classic three-horn front line. Sidney Bechet and later Benny Goodman gave it star status; its bright, vocal tone remains inseparable from the sound of early jazz and the brass-band tradition that still fills the streets of New Orleans.',
          ],
        },
        {
          title: 'How an instrument finds its players',
          body: [
            'There is a feedback loop between an instrument and the musicians drawn to it. A breakthrough player reveals new possibilities, which attract the next generation, who push further still. The saxophone after Charlie Parker, the bass after Scott LaFaro, the drums after Tony Williams — each became a different instrument in the imagination of those who came next, even though not a single key or string had changed.',
          ],
        },
      ]}
      related={[
        { to: '/jazz-legends', label: 'Jazz Legends' },
        { to: '/jazz-listening-guides', label: 'Listening Guides' },
        { to: '/classic-albums', label: 'Classic Albums' },
      ]}
    />
  );
}
