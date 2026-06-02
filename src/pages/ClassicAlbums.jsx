import TopicPage from '../components/TopicPage.jsx';
import { albums } from '../lib/images.js';

export default function ClassicAlbums() {
  return (
    <TopicPage
      path="/classic-albums"
      header={{
        kicker: 'The canon',
        title: 'Essential jazz albums every listener should own',
        intro: 'Not a ranking, but a foundation — the records we hand to anyone who asks where to begin, each one a portal into an entire way of hearing.',
        image: albums[0],
        imageAlt: 'A classic jazz album cover beside a turntable',
      }}
      lead={[
        'Any list of essential albums is an argument disguised as a catalog, and we make ours gladly. The records we cherish here are not necessarily the greatest ever made — greatness is a tiresome category — but they are the ones that open doors. Each is a portal into a way of hearing, and once you have absorbed it, the music on either side of it suddenly makes sense.',
        'Below we group the canon by the doors it opens: the welcoming masterpieces, the spiritual statements, the architecture of the big band, and the intimacy of the small group. Treat these not as trophies but as touchstones to return to across the seasons of your life.',
      ]}
      gallery={[
        { src: albums[1], alt: 'A jazz LP sleeve photographed on a dark surface' },
        { src: albums[2], alt: 'A stack of classic jazz records' },
        { src: albums[3], alt: 'An album spinning on a turntable platter' },
        { src: albums[4], alt: 'A close view of an album jacket spine' },
      ]}
      sections={[
        {
          id: 'gateways',
          title: 'The gateways',
          paras: [
            'Begin with the records that welcome you in. Miles Davis\'s Kind of Blue, recorded in 1959 with almost no rehearsal, invites the listener into modal jazz with such warmth that even those who claim not to like jazz find themselves quietly held by it. It is the most generous masterpiece in the music.',
            'From there the path leads naturally to Dave Brubeck\'s explorations of unusual time signatures, to the effortless swing of a Count Basie session, and to the vocal artistry of Ella Fitzgerald\'s songbooks — records that ask nothing of you but your attention and reward it many times over.',
          ],
        },
        {
          id: 'statements',
          title: 'The spiritual statements',
          image: albums[5],
          imageAlt: 'A reverently lit jazz record on display',
          paras: [
            'Some albums are not merely collections of tunes but unified artistic statements. John Coltrane\'s A Love Supreme turns technical mastery into something close to prayer, a four-part suite that has moved listeners of every faith and none for sixty years.',
            'These are records to be heard whole, in sequence, without interruption. They reward the listener who treats them as the complete works they were conceived to be — which is, not coincidentally, exactly the kind of attentive listening that vinyl encourages.',
          ],
        },
        {
          id: 'architecture',
          title: 'Architecture and intimacy',
          paras: [
            'For the architecture of swing, sit with Duke Ellington at Newport and hear an orchestra that thinks and breathes as a single body. The big band at its best is one of the marvels of twentieth-century music — dozens of musicians achieving the precision of chamber music with the power of a freight train.',
            'For the opposite pole, the intimacy of the small group, there is Bill Evans and Sunday at the Village Vanguard, where a piano trio achieves a kind of telepathy. Between these two poles — the grand and the intimate — lies most of what makes jazz endlessly rewarding.',
            'The mark of an essential album is not that you exhaust it but that it keeps revealing new rooms each time you think you know the whole house. Own these, return to them, and let them change as you do.',
          ],
        },
      ]}
      accordionTitle="A starter shelf"
      accordionIntro="Ten records that, taken together, form a complete introduction to the music."
      accordions={[
        {
          title: 'Five albums to begin with',
          body: [
            'If you own nothing yet, start here. A modal masterpiece for warmth and ease; a spiritual suite for depth; a big-band live recording for power; a small-group session for intimacy; and a great vocal album to remind you that the human voice is itself a jazz instrument.',
            'Five records is enough to keep a new listener absorbed for months. Resist the urge to acquire faster than you can truly listen — the goal is depth of acquaintance, not breadth of inventory.',
          ],
        },
        {
          title: 'Five more to grow into',
          body: [
            'Once the first five feel like old friends, widen the circle: a hard-bop session for fire, a cool-jazz date for restraint, an avant-garde record that still startles, a solo-piano recital, and a record from a tradition outside the American mainstream to remind you that jazz long ago became a global language.',
            'By the time these ten records feel familiar, you will no longer need our lists. You will have developed the only thing that matters — your own ear, and your own argument about what the essential music is.',
          ],
        },
      ]}
      related={[
        { to: '/jazz-legends', label: 'Jazz Legends' },
        { to: '/vinyl-collections', label: 'Vinyl Collections' },
        { to: '/jazz-listening-guides', label: 'Listening Guides' },
      ]}
    />
  );
}
