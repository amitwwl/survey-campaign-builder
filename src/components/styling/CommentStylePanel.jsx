import { useSurvey } from '../../context/SurveyContext';
import ColorInput from '../shared/ColorInput';
import SelectField from '../shared/SelectField';
import NumberField from '../shared/NumberField';
import AlignmentButtons from '../shared/AlignmentButtons';
import Section from '../shared/Section';
import { FONTS } from './TextStylePanel';

const FONT_STYLES = [
  { value: 'normal', label: 'Normal' },
  { value: 'italic', label: 'Italic' },
  { value: 'bold', label: 'Bold' },
];

export default function CommentStylePanel() {
  const { styling, updateStyling } = useSurvey();
  const c = styling.additionalComment;
  const path = (key) => ['additionalComment', key];

  return (
    <Section title="Additional Comment Styling">
      <ColorInput label="Border Color" value={c.borderColor} onChange={(v) => updateStyling(path('borderColor'), v)} />
      <ColorInput label="Text Color" value={c.textColor} onChange={(v) => updateStyling(path('textColor'), v)} />
      <ColorInput label="Background Color" value={c.backgroundColor} onChange={(v) => updateStyling(path('backgroundColor'), v)} />
      <NumberField label="Border Width" value={c.borderWidth} onChange={(v) => updateStyling(path('borderWidth'), v)} suffix="px" />
      <SelectField label="Font" value={c.fontFamily} onChange={(v) => updateStyling(path('fontFamily'), v)} options={FONTS} />
      <NumberField label="Font Size" value={c.fontSize} onChange={(v) => updateStyling(path('fontSize'), v)} suffix="px" />
      <SelectField label="Font Style" value={c.fontStyle} onChange={(v) => updateStyling(path('fontStyle'), v)} options={FONT_STYLES} />
      <AlignmentButtons value={c.alignment} onChange={(v) => updateStyling(path('alignment'), v)} />
    </Section>
  );
}
