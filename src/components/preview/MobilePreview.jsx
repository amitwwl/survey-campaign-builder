import { useEffect, useState } from 'react';
import { useSurvey } from '../../context/SurveyContext';
import { cornersToCss } from '../../utils/styleHelpers';
import QuestionScreen from './QuestionScreen';
import ThankYouScreen from './ThankYouScreen';
import CrossIcon from './CrossIcon';

export default function MobilePreview() {
  const { content, styling } = useSurvey();
  const [screenIndex, setScreenIndex] = useState(0); // index into content.questions
  const [showThankYou, setShowThankYou] = useState(false);
  const [selections, setSelections] = useState({}); // { [questionId]: optionId }
  const [comments, setComments] = useState({}); // { [questionId]: string }

  // Keep the preview in range whenever the question count changes in the Content tab.
  useEffect(() => {
    if (screenIndex > content.questions.length - 1) {
      setScreenIndex(Math.max(0, content.questions.length - 1));
    }
  }, [content.questions.length, screenIndex]);

  const reset = () => {
    setScreenIndex(0);
    setShowThankYou(false);
  };

  const question = content.questions[screenIndex];

  const goNext = () => {
    if (screenIndex < content.questions.length - 1) {
      setScreenIndex((i) => i + 1);
    } else if (content.thankYou.enabled) {
      setShowThankYou(true);
    } else {
      reset();
    }
  };

  const { appearance } = styling;

  return (
    <div className="phone">
      <div className="phone__notch" />
      <div
        className="phone__screen"
        style={{
          background: appearance.backgroundColor,
          borderRadius: cornersToCss(appearance.cornerRadius),
        }}
      >
        <CrossIcon crossButton={styling.crossButton} />
        <div className="phone__content">
          {content.questions.length === 0 && <p className="hint">Add at least one survey page to see a preview.</p>}

          {!showThankYou && question && (
            <QuestionScreen
              key={question.id}
              question={question}
              styling={styling}
              selectedOption={selections[question.id]}
              onSelectOption={(optId) => setSelections((s) => ({ ...s, [question.id]: optId }))}
              comment={comments[question.id] || ''}
              onCommentChange={(v) => setComments((c) => ({ ...c, [question.id]: v }))}
              onSubmit={goNext}
            />
          )}

          {showThankYou && content.thankYou.enabled && <ThankYouScreen thankYou={content.thankYou} styling={styling} />}
        </div>
      </div>

      <div className="phone__pagination">
        {content.questions.map((q, i) => (
          <span key={q.id} className={`dot ${!showThankYou && i === screenIndex ? 'dot--active' : ''}`} />
        ))}
        {content.thankYou.enabled && <span className={`dot ${showThankYou ? 'dot--active' : ''}`} />}
      </div>
      {(screenIndex > 0 || showThankYou) && (
        <button type="button" className="btn btn--ghost phone__reset" onClick={reset}>
          ↺ Restart preview
        </button>
      )}
    </div>
  );
}
