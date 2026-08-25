export default function CrossIcon({ crossButton }) {
  if (!crossButton.enabled) return null;
  const { style, crossColor, fillColor, strokeColor, size, margin, customIcon } = crossButton;

  const wrapperStyle = {
    position: 'absolute',
    top: margin.top,
    right: margin.right,
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: style === 'circle' ? '50%' : style === 'minimal' ? 0 : 6,
    background: style === 'minimal' ? 'transparent' : fillColor,
    border: style === 'minimal' ? 'none' : `1px solid ${strokeColor}`,
  };

  if (customIcon) {
    return (
      <div style={wrapperStyle}>
        <img src={customIcon.dataUrl} alt="close" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
      </div>
    );
  }

  return (
    <div style={wrapperStyle}>
      <svg width="45%" height="45%" viewBox="0 0 24 24" fill="none">
        <path d="M4 4L20 20M20 4L4 20" stroke={crossColor} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
