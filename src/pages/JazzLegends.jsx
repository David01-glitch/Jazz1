import TopicPage from '../components/TopicPage.jsx';
import { artists, hero } from '../lib/images.js';

export default function JazzLegends() {
  return (
    <TopicPage
      path="/jazz-legends"
      header={{
        kicker: 'Portraits',
        title: 'Jazz legends and the language they invented',
        intro: 'The men and women who took a regional folk music and turned it into the great improvised art of the twentieth century — told as the lives they actually were.',
        image: artists[0],
        imageAlt: 'A jazz saxophonist lit by a single warm spotlight',
      }}
      lead={[
        'To call someone a jazz legend is to say that the music would sound different today had they never lived. By that standard the genuine legends are fewer than the marketing suggests — but they are also more fascinating, because each of them solved a problem no one had even named yet. This is where we gather their portraits.',
        'We are not interested in trivia or tidy hagiography. We want the apprenticeships and the rivalries, the false starts and the breakthroughs, the human beings behind the iconic photographs. Below are the threads we follow through the whole history of the music — the eras, the revolutions, and the artists too often left out of the standard story.',
      ]}
      gallery={[
        { src: artists[1], alt: 'A trumpeter mid-solo on a club stage' },
        { src: artists[2], alt: 'A pianist at a grand piano in low light' },
        { src: artists[3], alt: 'A vocalist at a vintage microphone' },
        { src: artists[4], alt: 'A saxophone resting against a chair backstage' },
      ]}
      sections={[
        {
          id: 'golden-age',
          title: 'The Golden Age of Jazz',
          paras: [
            'The golden age was less a period than a long exhale of American creativity. From the brass bands of Congo Square and the syncopated parade music of New Orleans, a new vocabulary emerged in real time — musicians inventing a language across bandstands and rent parties, then handing it to one another.',
            'Louis Armstrong stands at the headwaters. He did not merely play the trumpet brilliantly; he reorganized how every instrument after him would think about rhythm, phrasing and the very idea of the soloist. By the 1930s the music had become the popular dance music of a generation, with Duke Ellington, Count Basie and Fletcher Henderson filling ballrooms with a sound both sophisticated and irresistibly physical.',
            'We return to this era not for nostalgia but for instruction. The way a soloist builds tension across thirty-two bars, the conversation between a rhythm section and a horn, the discipline that makes spontaneity possible — these remain the foundations on which everything later was built.',
          ],
        },
        {
          id: 'bebop-swing',
          title: 'The Evolution of Bebop and Swing',
          image: artists[5],
          imageAlt: 'A small jazz combo performing in an intimate club',
          paras: [
            'In the late 1930s, jazz was America\'s pop music. Swing filled enormous ballrooms and the big bands were celebrities; the music existed to move the body, and it did so gloriously. Within that golden commercial era, a quiet dissatisfaction grew among the most restless players.',
            'Bebop was their answer. In after-hours Harlem clubs, Charlie Parker, Dizzy Gillespie and Thelonious Monk stretched the harmonic and rhythmic language past anything the dance floor required. Tempos accelerated; solos grew labyrinthine; the music demanded to be listened to rather than danced to. It was, in effect, jazz declaring itself an art rather than a service.',
            'Everything that followed — cool, hard bop, modal, free — grew from the door bebop opened. Swing taught jazz to move a room; bebop taught it to speak its own mind. The art form has lived in the space between those two impulses ever since.',
          ],
        },
        {
          id: 'women-of-jazz',
          title: 'Women Who Shaped Jazz History',
          paras: [
            'The standard narrative of jazz survives by omission. From the very beginning women were not at the margins of the music but at its center — as composers, bandleaders, instrumentalists and singers who reshaped the art.',
            'Mary Lou Williams, a pianist and arranger, influenced nearly every era from swing through bebop; younger musicians sought her counsel and the greatest orchestras played her compositions. The vocalists transformed the music\'s emotional range: Billie Holiday turned the popular song into almost unbearable intimacy, Ella Fitzgerald proved virtuosity and joy could share a breath, and Sarah Vaughan brought an instrumentalist\'s harmonic daring to the human voice.',
            'To tell the history of jazz accurately is simply to tell it completely. These artists were not exceptions admitted by special grace. They were among its essential architects, and the music is fuller and stranger than the tidy legend allows.',
          ],
        },
      ]}
      accordionTitle="Legends, era by era"
      accordionIntro="Short studies you can open right here on the page."
      accordions={[
        {
          title: 'The New Orleans pioneers',
          kicker: 'c. 1900–1925',
          body: [
            'Before the recordings, before the fame, there were the cornetists and clarinetists of New Orleans who built the first jazz vocabulary in marching bands, dance halls and the clubs of Storyville. Buddy Bolden, who never recorded, lives now only in the memory of those who heard him and in the awe of the musicians he influenced.',
            'It was here that collective improvisation — several horns weaving independent lines at once — became the music\'s first signature. Out of this scene came Louis Armstrong, Sidney Bechet, Jelly Roll Morton and King Oliver, who carried the New Orleans sound up the river to Chicago and the world.',
          ],
        },
        {
          title: 'The architects of swing',
          kicker: 'c. 1930–1945',
          body: [
            'Duke Ellington treated the orchestra as a single instrument and composed for the specific voices of his players, producing a body of work that stands among the great American music of any genre. Count Basie made swing feel effortless, building a band around a rhythm section of almost telepathic ease.',
            'This was the era when jazz and popular culture were the same thing — and when the seeds of the next revolution were quietly planted in the players who wanted more than the dance floor allowed.',
          ],
        },
        {
          title: 'The modern voices',
          kicker: 'c. 1945 onward',
          body: [
            'Charlie Parker and Dizzy Gillespie reinvented the music\'s harmonic and rhythmic language. Miles Davis reinvented himself and the music repeatedly across decades, from cool jazz to modal to fusion. John Coltrane turned technical mastery into something close to prayer.',
            'These are the figures whose recordings most listeners encounter first, and for good reason. Their innovations remain the living grammar of jazz as it is played today.',
          ],
        },
      ]}
      related={[
        { to: '/classic-albums', label: 'Classic Albums' },
        { to: '/instrument-spotlights', label: 'Instrument Spotlights' },
        { to: '/blog', label: 'The Journal' },
      ]}
    />
  );
}
