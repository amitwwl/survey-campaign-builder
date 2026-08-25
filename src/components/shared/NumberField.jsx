import FieldRow from './FieldRow';

export default function NumberField({ label, value, onChange, min, max, suffix }) {
  return (
    <FieldRow label={label} inline>
      <div className="number-input">
        <input
          type="number"
          className="input"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {suffix && <span className="number-input__suffix">{suffix}</span>}
      </div>
    </FieldRow>
  );
}
