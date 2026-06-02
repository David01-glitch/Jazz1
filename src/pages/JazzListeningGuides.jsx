import TopicPage from '../components/TopicPage.jsx';
import { vinyl, instruments } from '../lib/images.js';

export default function JazzListeningGuides() {
  return (
    <TopicPage
      path="/jazz-listening-guides"
      header={{
        kicker: 'How to listen',
        title: 'Jazz listening guides: hi-fi, analog sound & attention',
        intro: 'You do not need a fortune to hear jazz the way it was meant to be heard. Clear-eyed guides to analog sound, your first hi-fi system, and the patient art of attentive listening.',
        image: vinyl[2],
        imageAlt: 'A turntable tonearm lowering onto a spinning record',
      }}
      lead={[
        'The world of hi-fi can feel deliberately bewildering, full of jargon and price tags that climb toward the absurd. We want to cut through it with a single principle: the goal is not to assemble expensive equipment but to remove the things standing between you and the music. A good system disappears. You stop hearing speakers and start hearing a band in a room.',
        'These guides are written for the curious beginner and the returning listener alike. We will explain why analog sound moves us, how to build a first system that serves the music, and — most importantly — how to listen in a way that gives the music back its full power.',
      ]}
      gallery={[
        { src: vinyl[3], alt: 'A close view of a record groove under the stylus' },
        { src: vinyl[4], alt: 'A vintage turntable and amplifier' },
        { src: instruments[4], alt: 'Piano keys lit warmly in a quiet room' },
        { src: vinyl[5], alt: 'A record being cleaned by hand' },
      ]}
      sections={[
        {
          id: 'analog-sound',
          title: 'Understanding Analog Sound',
          paras: [
            'When a microphone captures a trumpet, it produces a continuous electrical wave that mirrors the pressure changes in the air. A vinyl record stores that wave as a continuous physical groove; a stylus traces it, and the wave is reborn. Nothing in the chain has been chopped into samples. The signal remains, in the truest sense, analogous to the original sound.',
            'This is not an argument that analog is objectively superior to digital — modern digital audio is extraordinary. But the analog chain has a particular character: the way it handles the decay of a cymbal or the breath before a vocal phrase can produce a sense of presence many listeners describe as warmth. Some of that is the mastering; some is the format; some, honestly, is the ritual.',
            'And the ritual matters. To play a record is to commit. You choose a side, lower the needle, and for twenty minutes you are a listener rather than a skipper of tracks. In an age of infinite shuffle, that commitment is itself a kind of fidelity.',
          ],
        },
        {
          id: 'hi-fi-beginners',
          title: "A Beginner's Guide to Hi-Fi Audio",
          image: vinyl[4],
          imageAlt: 'A modest but well-chosen hi-fi system on a shelf',
          paras: [
            'Begin with the source and the speakers, the two ends of the chain where your money does the most good. A well-reviewed entry-level turntable with a decent cartridge will serve you for years. For speakers, trust your ears over the spec sheet — listen to several pairs with music you know intimately, and choose the ones that make you forget you are evaluating them.',
            'Resist the temptation to obsess over cables and exotic accessories before you have lived with a basic system. Most of the dramatic improvements available to a new listener come from proper speaker placement, a clean signal and a well-treated room — none of which cost much. Pull your speakers away from the wall, give them room to breathe, and sit at the apex of an equilateral triangle with them.',
            'Above all, remember that the point of a hi-fi system is not the system. It is the moment when Ben Webster\'s breath catches before a phrase, or when you hear, for the first time, the brush of a wire on a snare you had heard a hundred times.',
          ],
        },
        {
          id: 'art-of-listening',
          title: 'The art of attentive listening',
          paras: [
            'The greatest upgrade available to any listener costs nothing: attention. Choose a single album, remove distractions, and listen to it all the way through as the artists sequenced it. Notice the architecture — how a soloist builds an idea, how the rhythm section responds, how a quiet track sets up the one that follows.',
            'Listen actively across several sittings. The first time, simply let it wash over you. The second, follow one instrument from beginning to end. The third, notice the spaces — the silences, the breaths, the moments the band chooses not to play. Jazz is as much about what is left out as what is put in.',
            'Done this way, a single great album can occupy you for weeks and reward you for years. This, more than any equipment, is how the music gives back everything it has to give.',
          ],
        },
      ]}
      accordionTitle="Practical listening notes"
      accordions={[
        {
          title: 'A simple turntable setup checklist',
          body: [
            'Set the turntable on a level, stable surface away from your speakers to avoid feedback. Confirm the platter is level with a small bubble level. Set the tracking force and anti-skate to the cartridge maker\'s recommendation — too light causes mistracking and groove damage, too heavy causes wear. Use a clean stylus and clean records. None of this is difficult, and all of it protects both your records and your ears.',
          ],
        },
        {
          title: 'Headphones versus speakers for jazz',
          body: [
            'Both have their place. A good pair of headphones offers detail and intimacy, ideal for late-night listening or apartments where volume is a concern, and they remove the room from the equation entirely. Speakers, properly placed, recreate the sense of a band occupying physical space in front of you — many listeners find this more emotionally convincing. If budget allows only one to start, choose the one that fits your life, and you will listen more often.',
          ],
        },
      ]}
      related={[
        { to: '/vinyl-collections', label: 'Vinyl Collections' },
        { to: '/classic-albums', label: 'Classic Albums' },
        { to: '/instrument-spotlights', label: 'Instrument Spotlights' },
      ]}
    />
  );
}
