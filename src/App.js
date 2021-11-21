import AboutProject from './components/AboutProject';
import BackThisProject from './components/BackThisProject';
import Header from './components/Header';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App bg-lightGray min-h-screen pb-24 sm:pb-30 font-commissioner">
      <Header />
      <BackThisProject />
      <Stats />
      <AboutProject />
    </div>
  );
}

export default App;
