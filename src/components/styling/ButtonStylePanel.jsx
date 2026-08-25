import ColorInput from '../shared/ColorInput';
import SelectField from '../shared/SelectField';
import NumberField from '../shared/NumberField';
import ToggleSwitch from '../shared/ToggleSwitch';
import AlignmentButtons from '../shared/AlignmentButtons';
import BoxInputs, { MARGIN_KEYS, CORNER_KEYS } from '../shared/BoxInputs';
import { FONTS } from './TextStylePanel';

const FONT_STYLES = [
  { value: 'normal', label: 'Normal' },
  { value: 'italic', label: 'Italic' },
  { value: 'bold', label: 'Bold' },
];

// Reused for both CTA Button Styling and Thank You Button Styling.
export default function ButtonStylePanel({ value, onChange }) {
  const set = (key, val) => onChange({ ...value, [key]: val });
  const setColor = (key, val) => onChange({ ...value, colors: { ...value.colors, [key]: val } });

  return (
    <>
      <ToggleSwitch label="Occupy Full Width" checked={value.fullWidth} onChange={(v) => set('fullWidth', v)} />
      <ColorInput label="Border Color" value={value.colors.border} onChange={(v) => setColor('border', v)} />
      <ColorInput label="Text Color" value={value.colors.text} onChange={(v) => setColor('text', v)} />
      <ColorInput label="Background Color" value={value.colors.background} onChange={(v) => setColor('background', v)} />
      <SelectField label="Font" value={value.fontFamily} onChange={(v) => set('fontFamily', v)} options={FONTS} />
      <NumberField label="Font Size" value={value.fontSize} onChange={(v) => set('fontSize', v)} suffix="px" />
      <SelectField label="Font Style" value={value.fontStyle} onChange={(v) => set('fontStyle', v)} options={FONT_STYLES} />
      <NumberField label="Height" value={value.height} onChange={(v) => set('height', v)} suffix="px" />
      {!value.fullWidth && <NumberField label="Width" value={value.width} onChange={(v) => set('width', v)} suffix="px" />}
      <NumberField label="Border Width" value={value.borderWidth} onChange={(v) => set('borderWidth', v)} suffix="px" />
      <BoxInputs label="Corner Radius" value={value.cornerRadius} onChange={(v) => set('cornerRadius', v)} keys={CORNER_KEYS} />
      <AlignmentButtons value={value.alignment} onChange={(v) => set('alignment', v)} />
      <BoxInputs label="Margins" value={value.margin} onChange={(v) => set('margin', v)} keys={MARGIN_KEYS} />
    </>
  );
}
