import { useSurvey } from '../../context/SurveyContext';
import Section from '../shared/Section';
import AppearancePanel from './AppearancePanel';
import TextStylePanel from './TextStylePanel';
import OptionListPanel from './OptionListPanel';
import CommentStylePanel from './CommentStylePanel';
import ButtonStylePanel from './ButtonStylePanel';
import CrossButtonPanel from './CrossButtonPanel';
import ThankYouStylePanel from './ThankYouStylePanel';

export default function StylingTab() {
  const { styling, updateStyling } = useSurvey();

  return (
    <div className="tab-panel">
      <AppearancePanel />

      <Section title="Question Title Styling">
        <TextStylePanel value={styling.questionTitle} onChange={(v) => updateStyling(['questionTitle'], v)} />
      </Section>

      <Section title="Subtitle Styling">
        <TextStylePanel value={styling.subtitleStyle} onChange={(v) => updateStyling(['subtitleStyle'], v)} />
      </Section>

      <OptionListPanel />
      <CommentStylePanel />

      <Section title="CTA Button Styling">
        <ButtonStylePanel value={styling.ctaButton} onChange={(v) => updateStyling(['ctaButton'], v)} />
      </Section>

      <CrossButtonPanel />
      <ThankYouStylePanel />
    </div>
  );
}
