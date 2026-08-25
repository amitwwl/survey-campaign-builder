import { useSurvey } from '../../context/SurveyContext';
import Section from '../shared/Section';
import NumberField from '../shared/NumberField';

export default function IntroductionPanel() {
  const { content, setNumPages } = useSurvey();

  return (
    <Section title="Introduction Page" defaultOpen>
      <p className="hint">
        Set how many survey pages this campaign has. Question sections below are created or removed
        automatically to match.
      </p>
      <NumberField
        label="Number of Survey Pages"
        value={content.introduction.numPages}
        min={1}
        onChange={setNumPages}
      />
    </Section>
  );
}
