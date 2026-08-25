import ColorInput from '../shared/ColorInput';
import SelectField from '../shared/SelectField';
import NumberField from '../shared/NumberField';
import FontStyleToggles from '../shared/FontStyleToggles';
import AlignmentButtons from '../shared/AlignmentButtons';
import BoxInputs, { MARGIN_KEYS } from '../shared/BoxInputs';

const FONTS = ['Inter', 'Roboto', 'Poppins', 'Georgia', 'Courier New'].map((f) => ({ value: f, label: f }));
const WEIGHTS = ['400', '500', '600', '700', '800'].map((w) => ({ value: w, label: w }));

// Reused for: Question Title Styling, Subtitle Styling, Thank You title/subtitle.
export default function TextStylePanel({ value, onChange }) {
  const set = (key, val) => onChange({ ...value, [key]: val });
  return (
    <>
      <ColorInput label="Color" value={value.color} onChange={(v) => set('color', v)} />
      <SelectField label="Font Family" value={value.fontFamily} onChange={(v) => set('fontFamily', v)} options={FONTS} />
      <NumberField label="Font Size" value={value.fontSize} onChange={(v) => set('fontSize', v)} suffix="px" />
      <SelectField label="Font Weight" value={value.fontWeight} onChange={(v) => set('fontWeight', v)} options={WEIGHTS} />
      <FontStyleToggles
        bold={value.bold}
        italic={value.italic}
        underline={value.underline}
        onChange={(v) => onChange({ ...value, ...v })}
      />
      <AlignmentButtons value={value.alignment} onChange={(v) => set('alignment', v)} />
      <BoxInputs label="Margin" value={value.margin} onChange={(v) => set('margin', v)} keys={MARGIN_KEYS} />
    </>
  );
}

export { FONTS, WEIGHTS };
