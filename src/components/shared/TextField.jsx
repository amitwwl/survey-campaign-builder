import FieldRow from './FieldRow';

export default function TextField({ label, value, onChange, placeholder }) {
  return (
    <FieldRow label={label}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldRow>
  );
}
