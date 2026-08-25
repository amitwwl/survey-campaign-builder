import FieldRow from './FieldRow';

// Bold / Italic / Underline checkboxes described in the spec as "Font Style".
export default function FontStyleToggles({ label = 'Font Style', bold, italic, underline, onChange }) {
  const toggle = (key, val) => onChange({ bold, italic, underline, [key]: val });
  return (
    <FieldRow label={label} inline>
      <div className="chip-group">
        <button type="button" className={`chip ${bold ? 'chip--active' : ''}`} style={{ fontWeight: 700 }} onClick={() => toggle('bold', !bold)}>
          B
        </button>
        <button type="button" className={`chip ${italic ? 'chip--active' : ''}`} style={{ fontStyle: 'italic' }} onClick={() => toggle('italic', !italic)}>
          I
        </button>
        <button type="button" className={`chip ${underline ? 'chip--active' : ''}`} style={{ textDecoration: 'underline' }} onClick={() => toggle('underline', !underline)}>
          U
        </button>
      </div>
    </FieldRow>
  );
}
