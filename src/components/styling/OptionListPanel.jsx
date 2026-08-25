import { useSurvey } from '../../context/SurveyContext';
import SelectField from '../shared/SelectField';
import NumberField from '../shared/NumberField';
import BoxInputs, { CORNER_KEYS } from '../shared/BoxInputs';
import Section from '../shared/Section';
import OptionStateFields from './OptionStateFields';

const LAYOUTS = [
  { value: 'radio', label: 'Radio Style' },
  { value: 'checkbox', label: 'Checkbox Style' },
  { value: 'filled', label: 'Filled Option' },
  { value: 'alternative', label: 'Alternative Layout' },
];

export default function OptionListPanel() {
  const { styling, updateStyling } = useSurvey();
  const o = styling.optionList;
  const path = (key) => ['optionList', key];

  return (
    <Section title="Option List Style">
      <SelectField label="Option Layout" value={o.layout} onChange={(v) => updateStyling(path('layout'), v)} options={LAYOUTS} />
      <NumberField label="Option Height" value={o.optionHeight} onChange={(v) => updateStyling(path('optionHeight'), v)} suffix="px" />
      <NumberField label="Bullet Spacing" value={o.bulletSpacing} onChange={(v) => updateStyling(path('bulletSpacing'), v)} suffix="px" />
      <NumberField label="Option Spacing" value={o.optionSpacing} onChange={(v) => updateStyling(path('optionSpacing'), v)} suffix="px" />
      <BoxInputs label="Corner Radius" value={o.cornerRadius} keys={CORNER_KEYS} onChange={(v) => updateStyling(path('cornerRadius'), v)} />

      <div className="subsection">
        <h4>Selected Option Styling</h4>
        <OptionStateFields value={o.selected} onChange={(v) => updateStyling(path('selected'), v)} />
      </div>

      <div className="subsection">
        <h4>Unselected Option Styling</h4>
        <OptionStateFields value={o.unselected} onChange={(v) => updateStyling(path('unselected'), v)} />
      </div>
    </Section>
  );
}
