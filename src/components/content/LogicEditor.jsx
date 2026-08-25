import { useSurvey } from '../../context/SurveyContext';

// Simplified / mock conditional-logic builder, as allowed by the brief:
// "Provide a simplified conditional logic section... Mock implementation is acceptable."
export default function LogicEditor({ qIndex, question }) {
  const { addCondition, updateCondition, removeCondition, content } = useSurvey();
  const pageOptions = content.questions.map((q, i) => ({ index: i, title: q.title || `Question ${i + 1}` }));

  return (
    <div className="logic-editor">
      {question.logic.conditions.map((cond) => (
        <div className="logic-editor__row" key={cond.id}>
          <span>If option is</span>
          <select
            className="input"
            value={cond.ifOptionText}
            onChange={(e) => updateCondition(qIndex, cond.id, { ifOptionText: e.target.value })}
          >
            <option value="">Select option</option>
            {question.options.map((o) => (
              <option key={o.id} value={o.text}>
                {o.text}
              </option>
            ))}
          </select>
          <span>redirect to</span>
          <select
            className="input"
            value={cond.redirectToPage}
            onChange={(e) => updateCondition(qIndex, cond.id, { redirectToPage: e.target.value })}
          >
            <option value="">Select page</option>
            {pageOptions.map((p) => (
              <option key={p.index} value={p.title}>
                {p.title}
              </option>
            ))}
            <option value="Thank You Page">Thank You Page</option>
          </select>
          <button type="button" className="icon-btn" onClick={() => removeCondition(qIndex, cond.id)}>
            ✕
          </button>
        </div>
      ))}
      <button type="button" className="btn btn--ghost" onClick={() => addCondition(qIndex)}>
        + Add Condition
      </button>
    </div>
  );
}
