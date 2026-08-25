// Simple label + control row, reused by every field in the app.
export default function FieldRow({ label, children, inline = false }) {
  return (
    <div className={`field-row ${inline ? 'field-row--inline' : ''}`}>
      {label && <label className="field-row__label">{label}</label>}
      <div className="field-row__control">{children}</div>
    </div>
  );
}
