import IntroductionPanel from './IntroductionPanel';
import QuestionsPanel from './QuestionsPanel';
import ThankYouPanel from './ThankYouPanel';

export default function ContentTab() {
  return (
    <div className="tab-panel">
      <IntroductionPanel />
      <QuestionsPanel />
      <ThankYouPanel />
    </div>
  );
}
