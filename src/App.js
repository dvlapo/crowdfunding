import { useState } from 'react';
import AboutProject from './components/AboutProject';
import BackThisProject from './components/BackThisProject';
import BackThisProjectModal from './components/BackThisProjectModal';
import Header from './components/Header';
import Stats from './components/Stats';
import Success from './components/Success';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finished, setFinished] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    window.scrollTo(0, 60);
  };

  return (
    <div className="App bg-lightGray min-h-screen pb-24 sm:pb-30 font-commissioner">
      <Header />
      <BackThisProject openModal={openModal} />
      {isModalOpen && (
        <BackThisProjectModal
          setIsModalOpen={setIsModalOpen}
          setFinished={setFinished}
        />
      )}
      <Stats />
      <AboutProject openModal={openModal} />
      {finished ? (
        <Success setIsModalOpen={setIsModalOpen} setFinished={setFinished} />
      ) : null}
    </div>
  );
}

export default App;
