import IntroSection from './components/IntroSection'
import ChapterSection from './components/ChapterSection'
import './App.css'

// Chapter: The Journey
const journeyContent = [
  { text: "So many warn me against this.", photo: "IMG_9143" },
  { text: "But my desire for adventure overrides my fear of the risks.", photo: "IMG_9161" },
  { text: "As I cycle, I try to escape my thoughts, I try to hear my heart.", photo: "IMG_9235" },
  { text: "But I can't.", photo: "IMG_9129" },
  { text: "It rains, it pours.", photo: "IMG_9186" },
  { text: "My soul endures rejection, my body endures bad weather.", photo: "IMG_9193" },
  { text: "Until my heart is overwhelmed by love, and the sky is clear.", photo: "IMG_9184" },
  { text: "No words.", photo: "beautiful-view-3" },
  { text: "Just awe of the beauty.", photo: "beautiful-view-italy-4" },
  { text: "And love for the families who let me in.", photo: "guest-hut-germany" },
  { text: "", photo: "beautiful-view-italy-2" },
  { text: "", photo: "beautiful-view-italy-3" }
];

function App() {
  return (
    <main>
      <IntroSection />
      <ChapterSection
        chapterNumber={1}
        title="The Journey"
        content={journeyContent}
      />
      <footer className="ending-section">
        <div className="ending-fade"></div>
      </footer>
    </main>
  )
}

export default App
