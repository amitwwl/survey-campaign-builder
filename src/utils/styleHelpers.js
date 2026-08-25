// Turns the styling-state objects into real CSS the preview can use.

export const marginToCss = (m) => `${m.top}px ${m.right}px ${m.bottom}px ${m.left}px`;

export const cornersToCss = (c) => `${c.tl}px ${c.tr}px ${c.br}px ${c.bl}px`;

export function textStyleToCss(t) {
  return {
    color: t.color,
    fontFamily: t.fontFamily,
    fontSize: `${t.fontSize}px`,
    fontWeight: t.bold ? '700' : t.fontWeight,
    fontStyle: t.italic ? 'italic' : 'normal',
    textDecoration: t.underline ? 'underline' : 'none',
    textAlign: t.alignment,
    margin: marginToCss(t.margin),
  };
}

export function buttonStyleToCss(b) {
  return {
    display: 'block',
    width: b.fullWidth ? '100%' : `${b.width}px`,
    height: `${b.height}px`,
    color: b.colors.text,
    background: b.colors.background,
    border: `${b.borderWidth}px solid ${b.colors.border}`,
    borderRadius: cornersToCss(b.cornerRadius),
    fontFamily: b.fontFamily,
    fontSize: `${b.fontSize}px`,
    fontStyle: b.fontStyle === 'italic' ? 'italic' : 'normal',
    fontWeight: b.fontStyle === 'bold' ? '700' : '400',
    margin:
      b.alignment === 'center'
        ? `${b.margin.top}px auto ${b.margin.bottom}px auto`
        : b.alignment === 'right'
        ? `${b.margin.top}px ${b.margin.right}px ${b.margin.bottom}px auto`
        : `${b.margin.top}px ${b.margin.right}px ${b.margin.bottom}px ${b.margin.left}px`,
    cursor: 'pointer',
  };
}

export function optionStateToCss(o) {
  return {
    borderColor: o.borderColor,
    color: o.textColor,
    background: o.backgroundColor,
    borderWidth: `${o.borderWidth}px`,
    borderStyle: 'solid',
    fontFamily: o.fontFamily,
    fontSize: `${o.fontSize}px`,
    fontWeight: o.bold ? '700' : o.fontWeight,
    fontStyle: o.italic ? 'italic' : 'normal',
    textDecoration: o.underline ? 'underline' : 'none',
    textAlign: o.alignment,
  };
}
