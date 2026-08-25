export default function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'content', label: 'Content' },
    { id: 'styling', label: 'Styling' },
  ];
  return (
    <div className="tab-bar">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`tab-bar__btn ${active === t.id ? 'tab-bar__btn--active' : ''}`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
