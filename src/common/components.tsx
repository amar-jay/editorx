import {
  CodeBlockElement,
  createPlateUI,
  ELEMENT_CODE_BLOCK,
  ELEMENT_PARAGRAPH,
  StyledElement,
  withProps,
  PlateCommentLeaf,
  ELEMENT_H1,
  ELEMENT_H2,
  MARK_COMMENT,
  MARK_FONT_SIZE,
} from '@udecode/plate';
import { withStyledDraggables } from './plugins/dnd';
import { DND_ENABLED } from './store';


export const components = {
  [ELEMENT_CODE_BLOCK]: CodeBlockElement,

  [ELEMENT_H1]: withProps(StyledElement, {
    styles: {
      root: {
        margin: '1rem 0',
//        textDecoration: 'underline',
//       fontFamily: 'monospace',
        fontSize: '1.875em',
        fontWeight: '500',
        lineHeight: '1.3',
      },
    },
    }),

  [ELEMENT_H2]: withProps(StyledElement, {
    styles: {
      root: {
//       fontFamily: 'monospace',
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
//       fontFamily: 'monospace',
        placeholder: 'Enter text here',
        margin: 0,
        padding: '4px 0',
        color: '#111',
      },
    },
    prefixClassNames: 'p',
  }),
  [MARK_COMMENT]: PlateCommentLeaf,
  [MARK_FONT_SIZE]: withProps(StyledElement, {
    styles: {
      root: {
        fontSize: '1.3em',
      },
    },
    }),
}

let plateUI = createPlateUI(
  components
);

if (DND_ENABLED && typeof window !== 'undefined' ){
    plateUI = withStyledDraggables(plateUI)

}

export {plateUI};

