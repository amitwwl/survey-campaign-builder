import { useSurvey } from '../../context/SurveyContext';
import Section from '../shared/Section';
import TextField from '../shared/TextField';
import ToggleSwitch from '../shared/ToggleSwitch';
import SelectField from '../shared/SelectField';

const REDIRECT_TYPES = [
  { value: 'none', label: 'None' },
  { value: 'url', label: 'URL' },
];

export default function ThankYouPanel() {
  const { content, updateContent } = useSurvey();
  const ty = content.thankYou;

  const onUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateContent(['thankYou', 'media'], { name: file.name, dataUrl: reader.result, type: file.type });
    reader.readAsDataURL(file);
  };

  return (
    <Section title="Thank You Page">
      <ToggleSwitch label="Enable Thank You Page" checked={ty.enabled} onChange={(v) => updateContent(['thankYou', 'enabled'], v)} />
      {ty.enabled && (
        <>
          <div className="field-row">
            <label className="field-row__label">Upload Media (PNG, JPG, JPEG, GIF, Lottie)</label>
            <input type="file" accept="image/png,image/jpeg,image/gif,.json" onChange={onUpload} />
          </div>
          {ty.media && <span className="hint">Selected: {ty.media.name}</span>}

          <TextField label="Title" value={ty.title} onChange={(v) => updateContent(['thankYou', 'title'], v)} />
          <TextField label="Subtitle" value={ty.subtitle} onChange={(v) => updateContent(['thankYou', 'subtitle'], v)} />
          <TextField label="CTA Button Text" value={ty.ctaButtonText} onChange={(v) => updateContent(['thankYou', 'ctaButtonText'], v)} />

          <SelectField
            label="Redirect"
            value={ty.redirect.type}
            onChange={(v) => updateContent(['thankYou', 'redirect', 'type'], v)}
            options={REDIRECT_TYPES}
          />
          {ty.redirect.type === 'url' && (
            <TextField
              label="Redirect URL"
              value={ty.redirect.url}
              onChange={(v) => updateContent(['thankYou', 'redirect', 'url'], v)}
              placeholder="https://example.com"
            />
          )}
        </>
      )}
    </Section>
  );
}
