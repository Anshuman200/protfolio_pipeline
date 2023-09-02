import { FloatButton } from 'antd';
import Header from './components/Header';
// import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        {/* <Hero nav="home" title="Ansh Singh" description="Software Developer" titleBtn="Download CV" hasGrid={true} media={'media'} hasBgImg={true} gitLink={'https://github.com/Anshuman200'} linkedInLink={'https://www.linkedin.com/in/singh-ansh'} /> */}
        <Projects />
        <Skills />
        <Contact nav="contact" />
        <FloatButton.BackTop />
      </div>
    </div>
  );
}

export default App;
