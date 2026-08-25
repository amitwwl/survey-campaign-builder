export default function ToggleSwitch({ label, checked, onChange }) {
  return (
    <label className="toggle">
      <span className="toggle__label">{label}</span>
      <span className={`toggle__track ${checked ? 'toggle__track--on' : ''}`} onClick={() => onChange(!checked)}>
        <span className="toggle__thumb" />
      </span>
    </label>
  );
}
