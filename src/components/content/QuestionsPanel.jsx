import { useSurvey } from '../../context/SurveyContext';
import Section from '../shared/Section';
import QuestionEditor from './QuestionEditor';

export default function QuestionsPanel() {
  const { content, activeQuestionIndex, setActiveQuestionIndex } = useSurvey();

  return (
    <Section title="Question Pages" defaultOpen>
      <div className="question-tabs">
        {content.questions.map((q, i) => (
          <button
            key={q.id}
            type="button"
            className={`question-tabs__tab ${i === activeQuestionIndex ? 'question-tabs__tab--active' : ''}`}
            onClick={() => setActiveQuestionIndex(i)}
          >
            Q{i + 1}
          </button>
        ))}
      </div>
      <QuestionEditor index={activeQuestionIndex} />
    </Section>
  );
}
