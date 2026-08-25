import { useSurvey } from '../../context/SurveyContext';
import TextField from '../shared/TextField';
import ToggleSwitch from '../shared/ToggleSwitch';
import OptionEditor from './OptionEditor';
import LogicEditor from './LogicEditor';

export default function QuestionEditor({ index }) {
  const { content, updateQuestion, addOption, removeOption, updateOption } = useSurvey();
  const question = content.questions[index];
  if (!question) return null;

  return (
    <div className="question-editor">
      <TextField label="Title" value={question.title} onChange={(v) => updateQuestion(index, { title: v })} />
      <TextField label="Subtitle" value={question.subtitle} onChange={(v) => updateQuestion(index, { subtitle: v })} />

      <div className="field-block">
        <label className="field-row__label">Options</label>
        <OptionEditor
          options={question.options}
          onAdd={() => addOption(index)}
          onRemove={(id) => removeOption(index, id)}
          onChange={(id, text) => updateOption(index, id, text)}
        />
      </div>

      <ToggleSwitch
        label="Additional Comments"
        checked={question.additionalComments}
        onChange={(v) => updateQuestion(index, { additionalComments: v })}
      />

      <div className="field-block">
        <label className="field-row__label">Logic</label>
        <LogicEditor qIndex={index} question={question} />
      </div>

      <TextField
        label="Submit Button Text"
        value={question.submitButtonText}
        onChange={(v) => updateQuestion(index, { submitButtonText: v })}
      />
    </div>
  );
}
