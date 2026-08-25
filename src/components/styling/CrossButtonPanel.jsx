import { useSurvey } from '../../context/SurveyContext';
import ColorInput from '../shared/ColorInput';
import SelectField from '../shared/SelectField';
import NumberField from '../shared/NumberField';
import ToggleSwitch from '../shared/ToggleSwitch';
import BoxInputs, { MARGIN_KEYS } from '../shared/BoxInputs';
import Section from '../shared/Section';

const STYLES = [
  { value: 'classic', label: 'Classic' },
  { value: 'circle', label: 'Circle' },
  { value: 'minimal', label: 'Minimal' },
];

export default function CrossButtonPanel() {
  const { styling, updateStyling } = useSurvey();
  const c = styling.crossButton;
  const path = (key) => ['crossButton', key];

  const onUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateStyling(path('customIcon'), { name: file.name, dataUrl: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <Section title="Cross Button Styling">
      <ToggleSwitch label="Enable / Disable" checked={c.enabled} onChange={(v) => updateStyling(path('enabled'), v)} />
      {c.enabled && (
        <>
          <SelectField label="Cross Button Style" value={c.style} onChange={(v) => updateStyling(path('style'), v)} options={STYLES} />
          <div className="field-row">
            <label className="field-row__label">Upload Custom Icon</label>
            <input type="file" accept="image/*" onChange={onUpload} />
          </div>
          <ColorInput label="Cross Color" value={c.crossColor} onChange={(v) => updateStyling(path('crossColor'), v)} />
          <ColorInput label="Fill Color" value={c.fillColor} onChange={(v) => updateStyling(path('fillColor'), v)} />
          <ColorInput label="Stroke Color" value={c.strokeColor} onChange={(v) => updateStyling(path('strokeColor'), v)} />
          <NumberField label="Size" value={c.size} onChange={(v) => updateStyling(path('size'), v)} suffix="px" />
          <BoxInputs label="Margins" value={c.margin} keys={MARGIN_KEYS} onChange={(v) => updateStyling(path('margin'), v)} />
        </>
      )}
    </Section>
  );
}
