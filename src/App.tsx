import Section1 from './components/Section1';
import SEOHead from './components/SEOHead';
import { section1Props } from './data/props';

function App() {
  return (
    <div className="App">
      <SEOHead />
      <Section1 {...section1Props} />
    </div>
  );
}

export default App;
