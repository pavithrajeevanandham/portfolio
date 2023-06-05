import './App.css';
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';
import { useState } from 'react';
import Resume from './components/Resume';

function App() {
  const [isResumeView, setResumeView] = useState(false)
  const handleResumeView = () => {
    setResumeView(!isResumeView);
  }
  return (
    <div className="App">
      <Sidebar handleResumeView={handleResumeView} />
      {!isResumeView && <MainComponent />}
      {isResumeView && <Resume handleResumeView={handleResumeView} />}
    </div>
  );
}

export default App;
