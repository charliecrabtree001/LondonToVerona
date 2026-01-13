import IntroSection from './components/IntroSection'
import ChapterSection from './components/ChapterSection'
import './App.css'

// Chapter 1: Get Started
const chapter1Content = [
  { text: "The essentials: Bike, Bike Bags, Sleeping Bag, Navigation Device, Water Bottle.", photo: "IMG_8845" },
  { text: "Don't use a saddle bag this large - they break/bend. My setup may look flash, your's doesn't need to.", photo: "IMG_8845" },
  { text: "Do a trial run first to test out your shelter, bike, packing, cooking, etc.", photo: "IMG_8833" }
];

// Chapter 2: Setting Off
const chapter2Content = [
  { text: "It starts very exciting, but brace yourself, in 24 hours you'll be in mental and physical pain.", photo: "IMG_8922" },
  { text: "You're switching from a modern life to a cave-man life, so it will take time to adjust.", photo: "IMG_8917" },
  { text: "Make sure your breaks work well.", photo: "IMG_8928" },
  { text: "I came crashing downhill into this gate.", photo: "IMG_8925" }
];

// Chapter 3: Where to sleep?
const chapter3Content = [
  { text: "I needed somewhere to sleep. I didn't want to wild camp in fear of getting caught at 1am in the morning.", photo: "IMG_8917" },
  { text: "I knocked on random doors, asking people if I could camp on their farm.", photo: "IMG_8917" },
  { text: "Someone agreed. I camped in their small garden, not on a farm. They treated me with pizza. I had an idea.", photo: "IMG_8912" }
];

// Chapter 4: France
const chapter4Content = [
  { text: "Instead of looking for farms to sleep on, I decided to look for gardens.", photo: "IMG_8930" },
  { text: "This worked better than expected.", photo: "IMG_8934" },
  { text: "The most wonderful French family invited me for dinner.", photo: "IMG_8944" }
];

// Chapter 5: Belgium
const chapter5Content = [
  { text: "Belgium was nice... and flat.", photo: "IMG_8960" }
];

// Chapter 6: Netherlands
const chapter6Content = [
  { text: "An old, rich couple let me into their garden. We had a fascinating conversation and ate delicious cheese.", photo: "IMG_9129" },
  { text: "They invited me for breakfast the next morning.", photo: "IMG_9133" }
];

// Chapter 7: Germany
const chapter7Content = [
  { text: "The trip became difficult.", photo: "IMG_9143" },
  { text: "It was cold and wet and everyone with a garden seemed to not like me.", photo: "IMG_9144" },
  { text: "So I snuck into a campsite.", photo: "IMG_9165" },
  { text: "And the sun rose again.", photo: "IMG_9186" },
  { text: "It always does.", photo: "IMG_9193" },
  { text: "But it was different.", photo: "IMG_9184" },
  { text: "I no longer took it for granted.", photo: "IMG_9161" },
  { text: "I cycled past a family farm. I asked to pitch my tent on their land.", photo: "IMG_9161" },
  { text: "No, they tell me.", photo: "IMG_9200" },
  { text: "You can stay here instead.", photo: "IMG_9199" },
  { text: "We ate dinner and I left in the morning.", photo: "IMG_9206" },
  { text: "I slowly approached the alps. My heart, full of love.", photo: "IMG_9209" }
];

// Chapter 8: Austria
const chapter8Content = [
  { text: "Humble.", photo: "IMG_9239" },
  { text: "There she stood.", photo: "IMG_9239" },
  { text: "I am in ore.", photo: "IMG_9239" },
  { text: "No words.", photo: "IMG_9239" },
  { text: "", photo: "IMG_9249" },
  { text: "", photo: "IMG_9240" },
  { text: "", photo: "IMG_9241" }
];

// Chapter 9: Italy
const chapter9Content = [
  { text: "I have made it far enough.", photo: "IMG_9293" },
  { text: "I have slept in the mountains.", photo: "IMG_9301" },
  { text: "I have swam in the lakes.", photo: "IMG_9309" },
  { text: "It is time to go home.", photo: "IMG_9385" },
  { text: "It is time to go home.", photo: "IMG_9385" },
  { text: "I collapsed in a vineyard that night, after cycling 150km.", photo: "IMG_9393" },
  { text: "Forever grateful.", photo: "IMG_9405" },
  { text: "I was going home.", photo: "IMG_9405" }
];

function App() {
  return (
    <main>
      <IntroSection />
      <ChapterSection
        chapterNumber={1}
        title="Get Started"
        content={chapter1Content}
      />
      <ChapterSection
        chapterNumber={2}
        title="Setting Off"
        content={chapter2Content}
      />
      <ChapterSection
        chapterNumber={3}
        title="Where to sleep?"
        content={chapter3Content}
      />
      <ChapterSection
        chapterNumber={4}
        title="France"
        content={chapter4Content}
      />
      <ChapterSection
        chapterNumber={5}
        title="Belgium"
        content={chapter5Content}
      />
      <ChapterSection
        chapterNumber={6}
        title="Netherlands"
        content={chapter6Content}
      />
      <ChapterSection
        chapterNumber={7}
        title="Germany"
        content={chapter7Content}
      />
      <ChapterSection
        chapterNumber={8}
        title="Austria"
        content={chapter8Content}
      />
      <ChapterSection
        chapterNumber={9}
        title="Italy"
        content={chapter9Content}
      />
    </main>
  )
}

export default App
