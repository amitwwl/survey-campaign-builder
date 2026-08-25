import FieldRow from './FieldRow';

export default function ColorInput({ label, value, onChange }) {
  return (
    <FieldRow label={label} inline>
      <div className="color-input">
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)} />
        <input
          type="text"
          className="input color-input__hex"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </FieldRow>
  );
}
