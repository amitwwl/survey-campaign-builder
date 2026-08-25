import { useState } from 'react';

// Collapsible panel used to keep the long Styling tab organized and scannable.
export default function Section({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`section ${open ? 'section--open' : ''}`}>
      <button type="button" className="section__header" onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <span className="section__chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="section__body">{children}</div>}
    </div>
  );
}
