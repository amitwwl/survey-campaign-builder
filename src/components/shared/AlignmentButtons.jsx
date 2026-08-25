import FieldRow from './FieldRow';

const OPTIONS = [
  { value: 'left', label: '⯇' },
  { value: 'center', label: '☰' },
  { value: 'right', label: '⯈' },
];

export default function AlignmentButtons({ label = 'Alignment', value, onChange }) {
  return (
    <FieldRow label={label} inline>
      <div className="chip-group">
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`chip ${value === opt.value ? 'chip--active' : ''}`}
            onClick={() => onChange(opt.value)}
            title={opt.value}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </FieldRow>
  );
}
