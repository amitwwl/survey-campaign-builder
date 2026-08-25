export default function OptionEditor({ options, onChange, onAdd, onRemove }) {
  return (
    <div className="option-editor">
      {options.map((opt, i) => (
        <div className="option-editor__row" key={opt.id}>
          <span className="option-editor__index">{i + 1}</span>
          <input
            type="text"
            className="input"
            value={opt.text}
            onChange={(e) => onChange(opt.id, e.target.value)}
          />
          <button
            type="button"
            className="icon-btn"
            disabled={options.length <= 2}
            title={options.length <= 2 ? 'Minimum 2 options required' : 'Delete option'}
            onClick={() => onRemove(opt.id)}
          >
            ✕
          </button>
        </div>
      ))}
      <button type="button" className="btn btn--ghost" onClick={onAdd}>
        + Add Option
      </button>
    </div>
  );
}
