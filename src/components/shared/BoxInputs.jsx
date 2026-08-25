import FieldRow from './FieldRow';

// Reused for both "Margin" (top/bottom/left/right) and "Corner Radius" (tl/tr/bl/br) groups.
export default function BoxInputs({ label, value, onChange, keys }) {
  return (
    <FieldRow label={label}>
      <div className="box-inputs">
        {keys.map((k) => (
          <div className="box-inputs__item" key={k.key}>
            <span>{k.label}</span>
            <input
              type="number"
              className="input"
              value={value[k.key]}
              onChange={(e) => onChange({ ...value, [k.key]: Number(e.target.value) })}
            />
          </div>
        ))}
      </div>
    </FieldRow>
  );
}

export const MARGIN_KEYS = [
  { key: 'top', label: 'Top' },
  { key: 'bottom', label: 'Bottom' },
  { key: 'left', label: 'Left' },
  { key: 'right', label: 'Right' },
];

export const CORNER_KEYS = [
  { key: 'tl', label: 'TL' },
  { key: 'tr', label: 'TR' },
  { key: 'bl', label: 'BL' },
  { key: 'br', label: 'BR' },
];
