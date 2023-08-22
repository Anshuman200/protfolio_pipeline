import { FloatButton } from 'antd';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { ToastProvider } from 'react-toast-notifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Hero nav="home" title="Ansh Singh" description="Software Developer" titleBtn="Download CV" hasGrid={true} media={'media'} hasBgImg={true} gitLink={'https://github.com/Anshuman200'} linkedInLink={'https://www.linkedin.com/in/singh-ansh'} />
        <Hero nav="projects" title="My Projects" hasGrid={false} />
        <Skills />
        <ToastProvider>
          <Contact nav="contact" />
        </ToastProvider>
        <FloatButton.BackTop />
      </div>
    </div>
  );
}

export default App;
