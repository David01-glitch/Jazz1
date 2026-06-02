import TopicPage from '../components/TopicPage.jsx';
import { clubs, hero } from '../lib/images.js';

export default function LiveJazzHistory() {
  return (
    <TopicPage
      path="/live-jazz-history"
      header={{
        kicker: 'The rooms',
        title: 'Live jazz history and the legendary clubs of New Orleans',
        intro: 'A great jazz club is an instrument in its own right. We walk the streets of New Orleans through the rooms — surviving and vanished — where the music found its home.',
        image: hero.club,
        imageAlt: 'The dim, golden interior of a historic New Orleans jazz club',
      }}
      lead={[
        'There is a reason musicians speak of certain rooms with the reverence others reserve for cathedrals. A jazz club is not merely a venue; it is an acoustic and social instrument, shaped by its low ceilings, worn floors, the closeness of the audience to the band, and the accumulated memory of every night that came before.',
        'New Orleans, the city that gave jazz its first language, has more of these sacred rooms than anywhere on earth — and a longer memory of the ones now gone. This is a history of the music as it was actually lived: in real rooms, on real nights, in front of people who leaned in to listen.',
      ]}
      gallery={[
        { src: clubs[0], alt: 'A vintage stage with a single microphone' },
        { src: clubs[1], alt: 'Empty café tables in a historic music room' },
        { src: clubs[2], alt: 'Warm lamplight against exposed brick in a club' },
        { src: clubs[3], alt: 'A small bandstand awaiting the evening set' },
      ]}
      sections={[
        {
          id: 'birthplace',
          title: 'Where the music was born',
          paras: [
            'The story begins in the streets and squares — in Congo Square, where on Sunday afternoons enslaved and free people of color gathered to drum and dance, keeping alive the rhythmic traditions that would feed the new music. From there it moved into the dance halls and the clubs of Storyville, the district where a young Louis Armstrong heard cornetists who never recorded.',
            'Those Storyville rooms exist now only in memory and a handful of photographs. Their disappearance is part of the music\'s story — jazz has always lived close to impermanence, played in rooms that were demolished, neighborhoods that changed, scenes that scattered and reformed elsewhere.',
          ],
        },
        {
          id: 'preservation-hall',
          title: 'Legendary New Orleans Jazz Clubs',
          image: clubs[1],
          imageAlt: 'The interior of a preservation-style jazz hall with simple benches',
          paras: [
            'Preservation Hall remains the spiritual center — a deliberately humble room with hard benches and no amplification, where the music is allowed to be exactly as loud as acoustic instruments can make it. To sit there is to understand that jazz was never meant to be background. It was meant to be witnessed at close range, the breath and sweat of the players part of the experience.',
            'Along Frenchmen Street and through the Quarter, smaller rooms carry the tradition forward nightly, where brass bands and trad-jazz combos play to crowds standing close enough to feel the bass drum in their chests. These are not museums. They are working rooms where a living tradition continues to be made.',
          ],
        },
        {
          id: 'why-live',
          title: 'Why the room matters',
          paras: [
            'The recording captures the notes; the room captures the occasion. No streaming service will ever reproduce the particular hush of a room leaning in together toward a single quiet solo, or the collective lift when a band finds its groove and the whole space seems to rise an inch off the floor.',
            'To love live jazz is to accept its impermanence and to show up anyway. We urge every reader who can to seek out a small club, sit close, and let a band play to them rather than at them. The history of live jazz is not only in the archives. It is being written tonight, in a room not far from where you are reading this.',
          ],
        },
      ]}
      accordionTitle="A listener's field notes"
      accordions={[
        {
          title: 'How to behave in a listening room',
          body: [
            'In a true listening room, the music is the event, not the backdrop. Arrive on time, silence your phone, and save conversation for between sets. Applaud solos if the room does — in many jazz settings it is customary to acknowledge a fine solo as it ends. Above all, listen. You have come to witness something that will never happen exactly this way again.',
          ],
        },
        {
          title: 'Seeking out live jazz when you travel',
          body: [
            'Wherever you go, the small rooms are usually where the real music lives — not the tourist showcases but the neighborhood clubs where locals go. Ask musicians where they listen on their nights off. Look for rooms that program a regular weekly band; consistency is a sign of a healthy scene. And tip generously, buy the band\'s records, and come back. Scenes survive on the loyalty of listeners.',
          ],
        },
      ]}
      related={[
        { to: '/jazz-legends', label: 'Jazz Legends' },
        { to: '/instrument-spotlights', label: 'Instrument Spotlights' },
        { to: '/community', label: 'Community' },
      ]}
    />
  );
}
