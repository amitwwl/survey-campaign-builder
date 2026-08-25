import { useSurvey } from '../../context/SurveyContext';
import NumberField from '../shared/NumberField';
import BoxInputs, { MARGIN_KEYS } from '../shared/BoxInputs';
import Section from '../shared/Section';
import TextStylePanel from './TextStylePanel';
import ButtonStylePanel from './ButtonStylePanel';

export default function ThankYouStylePanel() {
  const { styling, updateStyling } = useSurvey();
  const ty = styling.thankYou;

  return (
    <Section title="Thank You Page Styling">
      <div className="subsection">
        <h4>Title</h4>
        <TextStylePanel value={ty.title} onChange={(v) => updateStyling(['thankYou', 'title'], v)} />
      </div>

      <div className="subsection">
        <h4>Subtitle</h4>
        <TextStylePanel value={ty.subtitle} onChange={(v) => updateStyling(['thankYou', 'subtitle'], v)} />
      </div>

      <div className="subsection">
        <h4>Image Styling</h4>
        <NumberField label="Width" value={ty.image.width} onChange={(v) => updateStyling(['thankYou', 'image', 'width'], v)} suffix="px" />
        <NumberField label="Height" value={ty.image.height} onChange={(v) => updateStyling(['thankYou', 'image', 'height'], v)} suffix="px" />
        <BoxInputs label="Margins" value={ty.image.margin} keys={MARGIN_KEYS} onChange={(v) => updateStyling(['thankYou', 'image', 'margin'], v)} />
      </div>

      <div className="subsection">
        <h4>Thank You Button Styling</h4>
        <ButtonStylePanel value={ty.button} onChange={(v) => updateStyling(['thankYou', 'button'], v)} />
      </div>
    </Section>
  );
}
