import { genId } from '../utils/id';

// ---------- CONTENT ----------


export function createOption(index) {
  return { id: genId('opt'), text: `Option ${index}` };
}

export function createQuestion(index) {
  return {
    id: genId('q'),
    title: `Question ${index}`,
    subtitle: '',
    options: [createOption(1), createOption(2)],
    additionalComments: false,
    logic: { conditions: [] },
    submitButtonText: index === 1 ? 'Next' : 'Next',
  };
}

export function createCondition() {
  return { id: genId('cond'), ifOptionText: '', redirectToPage: '' };
}

export const defaultContent = {
  introduction: { numPages: 1 },
  questions: [createQuestion(1)],
  thankYou: {
    enabled: true,
    media: null, // { name, dataUrl, type }
    title: 'Thank you!',
    subtitle: 'We appreciate you taking the time to respond.',
    ctaButtonText: 'Done',
    redirect: { type: 'none', url: '' },
  },
};

// ---------- STYLING ----------

const defaultTextStyle = (overrides = {}) => ({
  color: '#1f2430',
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: '600',
  bold: false,
  italic: false,
  underline: false,
  alignment: 'left',
  margin: { top: 0, bottom: 8, left: 0, right: 0 },
  ...overrides,
});

const defaultOptionState = (overrides = {}) => ({
  borderColor: '#d8dbe3',
  textColor: '#1f2430',
  backgroundColor: '#ffffff',
  borderWidth: 1,
  fontFamily: 'Inter',
  fontSize: 14,
  fontWeight: '500',
  bold: false,
  italic: false,
  underline: false,
  alignment: 'left',
  ...overrides,
});

const defaultButtonStyle = (overrides = {}) => ({
  fullWidth: true,
  colors: { border: '#3457d5', text: '#ffffff', background: '#3457d5' },
  fontFamily: 'Inter',
  fontSize: 15,
  fontStyle: 'normal',
  height: 44,
  width: 200,
  borderWidth: 1,
  cornerRadius: { tl: 10, tr: 10, bl: 10, br: 10 },
  alignment: 'center',
  margin: { top: 16, bottom: 0, left: 0, right: 0 },
  ...overrides,
});

export const defaultStyling = {
  appearance: {
    backgroundColor: '#ffffff',
    cornerRadius: { tl: 20, tr: 20, bl: 20, br: 20 },
    delaySeconds: 0,
    backdropColor: '#000000',
    backdropOpacity: 40,
  },

  questionTitle: defaultTextStyle({ fontSize: 20, fontWeight: '700' }),
  subtitleStyle: defaultTextStyle({ fontSize: 14, fontWeight: '400', color: '#6b7280' }),

  optionList: {
    layout: 'radio', // radio | checkbox | filled | alternative
    optionHeight: 48,
    bulletSpacing: 10,
    optionSpacing: 10,
    cornerRadius: { tl: 10, tr: 10, bl: 10, br: 10 },
    selected: defaultOptionState({ borderColor: '#3457d5', backgroundColor: '#eef1ff', textColor: '#3457d5' }),
    unselected: defaultOptionState(),
  },

  additionalComment: {
    borderColor: '#d8dbe3',
    textColor: '#1f2430',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    alignment: 'left',
  },

  ctaButton: defaultButtonStyle(),

  crossButton: {
    enabled: true,
    style: 'classic', // classic | circle | minimal
    customIcon: null,
    crossColor: '#1f2430',
    fillColor: '#f2f3f5',
    strokeColor: '#d8dbe3',
    size: 32,
    margin: { top: 12, bottom: 0, left: 0, right: 12 },
  },

  thankYou: {
    title: defaultTextStyle({ fontSize: 22, fontWeight: '700', alignment: 'center' }),
    subtitle: defaultTextStyle({ fontSize: 14, fontWeight: '400', color: '#6b7280', alignment: 'center' }),
    image: { width: 140, height: 140, margin: { top: 0, bottom: 16, left: 0, right: 0 } },
    button: defaultButtonStyle({ alignment: 'center' }),
  },
};
