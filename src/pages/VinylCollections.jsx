import TopicPage from '../components/TopicPage.jsx';
import { vinyl } from '../lib/images.js';

export default function VinylCollections() {
  return (
    <TopicPage
      path="/vinyl-collections"
      header={{
        kicker: 'The vinyl life',
        title: 'Building and caring for a jazz record library',
        intro: 'A first record is easy. A coherent collection is a discipline — and a deeply rewarding one. Here is the patient approach we share with every collector who asks.',
        image: vinyl[0],
        imageAlt: 'Rows of vinyl records standing on a wooden shelf',
      }}
      lead={[
        'A record collection is a kind of autobiography. Every shelf tells the story of the listener who built it — their curiosities, their loyalties, the corners of the music they could not stop exploring. The collections we admire most are never the most expensive ones. They are the most personal, and the most listened to.',
        'This is our complete primer on the vinyl life: how to begin without losing your way, how to read a record before you buy it, what truly makes a pressing valuable, and the quiet craft of cleaning and storage that separates a collection that lasts from one that decays.',
      ]}
      gallery={[
        { src: vinyl[1], alt: 'A crate of records being browsed by hand' },
        { src: vinyl[2], alt: 'A turntable stylus resting in a record groove' },
        { src: vinyl[3], alt: 'A close-up of a vinyl record surface catching light' },
        { src: vinyl[4], alt: 'A vintage turntable on a wooden cabinet' },
      ]}
      sections={[
        {
          id: 'starting-out',
          title: 'How to Start a Vinyl Collection',
          paras: [
            'Every serious collection begins with a single record that meant something. The instinct after that first acquisition is to buy widely and quickly — resist it. A collection assembled in a frenzy reflects the marketplace rather than the listener.',
            'Begin by deciding what you actually want from the format. Some collectors chase pristine first pressings as artifacts; others simply want the warm, involving sound of analog playback on records they will play often. Neither is wrong, but they lead to very different shelves and budgets. Honesty early will save you money and regret.',
            'Then build the rituals that make collecting a pleasure rather than an acquisition disorder. Keep your records clean, store them vertically away from heat and sunlight, keep a simple catalog — and above all, play them. A record that never leaves its sleeve is an investment; a record you return to on a quiet evening is a companion.',
          ],
        },
        {
          id: 'grading',
          title: 'Reading and grading a record',
          image: vinyl[5],
          imageAlt: 'Hands inspecting a vinyl record held up to the light',
          paras: [
            'Learn to read a record before you buy it. Hold it to the light at an angle to see scuffs and scratches, and understand the difference between cosmetic surface marks and the deep scratches you will hear as clicks and pops.',
            'Study the grading vocabulary and use it precisely. Treat any seller who grades generously with suspicion — a patient collector who walks away from a questionable copy will be rewarded with a better one.',
          ],
          list: [
            'Mint (M): essentially perfect, often sealed; rarely claimed honestly.',
            'Near Mint (NM): looks and plays as new with only the faintest signs of handling.',
            'Very Good Plus (VG+): light marks that do not intrude on the listening.',
            'Very Good (VG): audible surface noise but still enjoyable; priced accordingly.',
            'Good / Fair / Poor: playable to barely playable — for rarities only.',
          ],
        },
        {
          id: 'valuation',
          title: 'Rare Vinyl Record Valuation',
          paras: [
            'New collectors are often surprised that two copies of the same album can differ in value by a factor of a hundred. What separates them is a constellation of details: the pressing plant, the matrix numbers in the runout groove, the label design, the country of origin, and the exact condition of both disc and jacket.',
            'Original first pressings command premiums because they sit closest to the source — often mastered from the original tapes and pressed in limited numbers before an album became a hit. Condition is the great multiplier: a rare record in poor shape is a curiosity, while the same record near-mint is a treasure. Provenance can add another layer of value still.',
            'Our counsel is simple: value records first for the music and only second as assets. A record bought because you love it, kept in fine condition and properly understood, will hold both its worth and its meaning. The most precious pressings, in the end, are the ones whose value you can hear.',
          ],
        },
        {
          id: 'care',
          title: 'The quiet craft of caring for records',
          paras: [
            'Of all the skills a collector develops, the care of records is the least romantic and the most consequential. A magnificent pressing, neglected, becomes a noisy ruin; a humble copy, lovingly maintained, will outlast its owner.',
            'Touch only the edges and the label. Return a record to its inner sleeve immediately after playing, and replace brittle paper sleeves with anti-static alternatives. Resist dry-wiping a dusty record, which drags grit across the vinyl; use a carbon-fiber brush before each play and a proper cleaning solution for deeper work. Never use household cleaners.',
            'Storage is the long game: keep records vertical, never stacked, in a cool and stable environment away from sunlight and radiators. Heat warps, sunlight fades jackets, and damp invites mold. The care you give a record is, in the end, the care you are giving your future evenings.',
          ],
        },
      ]}
      accordionTitle="Collector's questions"
      accordions={[
        {
          title: 'Should I buy original pressings or reissues?',
          body: [
            'It depends entirely on what you want. A well-mastered modern reissue can sound superb and costs a fraction of an original — ideal if your goal is to listen. Originals matter most when proximity to the source, scarcity and collectability are part of the appeal. Many seasoned collectors keep both: an affordable reissue to play and an original to treasure.',
          ],
        },
        {
          title: 'What is the single best upgrade for a new collector?',
          body: [
            'A proper cleaning routine and good anti-static inner sleeves. They cost little, protect everything you own, and audibly reduce surface noise on records you already have. Equipment upgrades can wait; preservation cannot.',
          ],
        },
        {
          title: 'How should I organize my collection?',
          body: [
            'However you will actually use it. Alphabetical by artist is the default and makes records easy to find. Some collectors organize by label, by era, or even by mood. The only wrong system is one so elaborate that you stop reshelving records — a pile on the floor is the enemy of both preservation and pleasure.',
          ],
        },
      ]}
      related={[
        { to: '/jazz-listening-guides', label: 'Listening Guides' },
        { to: '/classic-albums', label: 'Classic Albums' },
        { to: '/blog', label: 'The Journal' },
      ]}
    />
  );
}
