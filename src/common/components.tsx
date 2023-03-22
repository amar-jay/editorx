import {
  CodeBlockElement,
  createPlateUI,
  ELEMENT_CODE_BLOCK,
  ELEMENT_PARAGRAPH,
  StyledElement,
  withProps,
  ELEMENT_H1,
  ELEMENT_H2,
} from '@udecode/plate';
export const components = {
  [ELEMENT_CODE_BLOCK]: CodeBlockElement,

  [ELEMENT_H1]: withProps(StyledElement, {
    styles: {
      root: {
        margin: '1rem 0',
//        textDecoration: 'underline',
        fontSize: '1.875em',
        fontWeight: '500',
        lineHeight: '1.3',
      },
    },
    }),

  [ELEMENT_H2]: withProps(StyledElement, {
    styles: {
      root: {
        margin: '1rem 0',
        textDecoration: 'underline',
        fontSize: '1.3em',
        fontWeight: '500',
        lineHeight: '1.3',
      },
    },
    }),
  [ELEMENT_PARAGRAPH]: withProps(StyledElement, {
    // as: 'p',
    styles: {
      root: {
        placeholder: 'Enter text here',
        margin: 0,
        padding: '4px 0',
        color: '#111',
      },
    },
    prefixClassNames: 'p',
  }),
}

export const plateUI = createPlateUI(
  components
);
