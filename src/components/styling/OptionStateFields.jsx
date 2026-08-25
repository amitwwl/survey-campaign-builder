import ColorInput from '../shared/ColorInput';
import SelectField from '../shared/SelectField';
import NumberField from '../shared/NumberField';
import FontStyleToggles from '../shared/FontStyleToggles';
import AlignmentButtons from '../shared/AlignmentButtons';
import { FONTS, WEIGHTS } from './TextStylePanel';

// Reused for both "Selected Option Styling" and "Unselected Option Styling".
export default function OptionStateFields({ value, onChange }) {
  const set = (key, val) => onChange({ ...value, [key]: val });
  return (
    <>
      <ColorInput label="Border Color" value={value.borderColor} onChange={(v) => set('borderColor', v)} />
      <ColorInput label="Text Color" value={value.textColor} onChange={(v) => set('textColor', v)} />
      <ColorInput label="Background Color" value={value.backgroundColor} onChange={(v) => set('backgroundColor', v)} />
      <NumberField label="Border Width" value={value.borderWidth} onChange={(v) => set('borderWidth', v)} suffix="px" />
      <SelectField label="Font" value={value.fontFamily} onChange={(v) => set('fontFamily', v)} options={FONTS} />
      <NumberField label="Font Size" value={value.fontSize} onChange={(v) => set('fontSize', v)} suffix="px" />
      <SelectField label="Font Weight" value={value.fontWeight} onChange={(v) => set('fontWeight', v)} options={WEIGHTS} />
      <FontStyleToggles bold={value.bold} italic={value.italic} underline={value.underline} onChange={(v) => onChange({ ...value, ...v })} />
      <AlignmentButtons value={value.alignment} onChange={(v) => set('alignment', v)} />
    </>
  );
}
