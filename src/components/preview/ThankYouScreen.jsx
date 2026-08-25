import { textStyleToCss, buttonStyleToCss } from '../../utils/styleHelpers';

export default function ThankYouScreen({ thankYou, styling }) {
  const { title, subtitle, image, button } = styling.thankYou;

  return (
    <div style={{ textAlign: 'center' }}>
      {thankYou.media && (
        <img
          src={thankYou.media.dataUrl}
          alt=""
          style={{
            width: image.width,
            height: image.height,
            objectFit: 'cover',
            borderRadius: 12,
            margin: `${image.margin.top}px ${image.margin.right}px ${image.margin.bottom}px ${image.margin.left}px`,
          }}
        />
      )}
      <h3 style={textStyleToCss(title)}>{thankYou.title}</h3>
      {thankYou.subtitle && <p style={textStyleToCss(subtitle)}>{thankYou.subtitle}</p>}
      <button type="button" style={buttonStyleToCss(button)}>
        {thankYou.ctaButtonText || 'Done'}
      </button>
    </div>
  );
}
