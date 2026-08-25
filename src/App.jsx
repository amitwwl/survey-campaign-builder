import { useState } from 'react';
import { SurveyProvider } from './context/SurveyContext';
import Header from './components/layout/Header';
import TabBar from './components/layout/TabBar';
import ContentTab from './components/content/ContentTab';
import StylingTab from './components/styling/StylingTab';
import MobilePreview from './components/preview/MobilePreview';
import './styles/global.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <SurveyProvider>
      <div className="app">
        <Header />
        <div className="app__body">
          <div className="app__editor">
            <TabBar active={activeTab} onChange={setActiveTab} />
            {activeTab === 'content' ? <ContentTab /> : <StylingTab />}
          </div>
          <div className="app__preview">
            <MobilePreview />
          </div>
        </div>
      </div>
    </SurveyProvider>
  );
}
