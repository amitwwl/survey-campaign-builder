import FieldRow from './FieldRow';

export default function SelectField({ label, value, onChange, options }) {
  return (
    <FieldRow label={label} inline>
      <select className="input" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FieldRow>
  );
}
