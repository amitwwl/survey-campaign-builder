import { useSurvey } from '../../context/SurveyContext';
import ColorInput from '../shared/ColorInput';
import NumberField from '../shared/NumberField';
import BoxInputs, { CORNER_KEYS } from '../shared/BoxInputs';
import Section from '../shared/Section';

export default function AppearancePanel() {
  const { styling, updateStyling } = useSurvey();
  const a = styling.appearance;
  return (
    <Section title="Appearance" defaultOpen>
      <ColorInput label="Background Color" value={a.backgroundColor} onChange={(v) => updateStyling(['appearance', 'backgroundColor'], v)} />
      <BoxInputs label="Corner Radius" value={a.cornerRadius} keys={CORNER_KEYS} onChange={(v) => updateStyling(['appearance', 'cornerRadius'], v)} />
      <NumberField label="Display Delay" value={a.delaySeconds} onChange={(v) => updateStyling(['appearance', 'delaySeconds'], v)} suffix="sec" />
      <ColorInput label="Backdrop Color" value={a.backdropColor} onChange={(v) => updateStyling(['appearance', 'backdropColor'], v)} />
      <NumberField label="Backdrop Opacity" value={a.backdropOpacity} min={0} max={100} onChange={(v) => updateStyling(['appearance', 'backdropOpacity'], v)} suffix="%" />
    </Section>
  );
}
