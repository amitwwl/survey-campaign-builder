import { textStyleToCss, buttonStyleToCss, optionStateToCss, cornersToCss } from '../../utils/styleHelpers';

export default function QuestionScreen({ question, styling, selectedOption, onSelectOption, comment, onCommentChange, onSubmit }) {
  const { questionTitle, subtitleStyle, optionList, additionalComment, ctaButton } = styling;

  return (
    <div>
      <h3 style={textStyleToCss(questionTitle)}>{question.title || 'Untitled question'}</h3>
      {question.subtitle && <p style={textStyleToCss(subtitleStyle)}>{question.subtitle}</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: optionList.optionSpacing }}>
        {question.options.map((opt) => {
          const isSelected = selectedOption === opt.id;
          const state = isSelected ? optionList.selected : optionList.unselected;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectOption(opt.id)}
              style={{
                ...optionStateToCss(state),
                height: optionList.optionHeight,
                borderRadius: cornersToCss(optionList.cornerRadius),
                display: 'flex',
                alignItems: 'center',
                gap: optionList.bulletSpacing,
                padding: '0 14px',
                cursor: 'pointer',
              }}
            >
              {optionList.layout === 'radio' && (
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    border: `2px solid ${state.borderColor}`,
                    background: isSelected ? state.borderColor : 'transparent',
                    flexShrink: 0,
                  }}
                />
              )}
              {optionList.layout === 'checkbox' && (
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                    border: `2px solid ${state.borderColor}`,
                    background: isSelected ? state.borderColor : 'transparent',
                    flexShrink: 0,
                  }}
                />
              )}
              <span>{opt.text}</span>
            </button>
          );
        })}
      </div>

      {question.additionalComments && (
        <textarea
          className="preview-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
          style={{
            marginTop: 14,
            width: '100%',
            minHeight: 64,
            borderColor: additionalComment.borderColor,
            color: additionalComment.textColor,
            background: additionalComment.backgroundColor,
            borderWidth: additionalComment.borderWidth,
            borderStyle: 'solid',
            borderRadius: 8,
            fontFamily: additionalComment.fontFamily,
            fontSize: additionalComment.fontSize,
            fontStyle: additionalComment.fontStyle,
            textAlign: additionalComment.alignment,
            padding: 10,
            boxSizing: 'border-box',
          }}
        />
      )}

      <button type="button" style={buttonStyleToCss(ctaButton)} onClick={onSubmit}>
        {question.submitButtonText || 'Next'}
      </button>
    </div>
  );
}
