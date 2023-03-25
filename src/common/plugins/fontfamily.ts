// create custom plugin for font family with udecode/plate
// font family: sans-serif | monospace | serif
import { createPluginFactory } from '@udecode/plate';

export const MARK_FONT_FAMILY = 'fontFamily';

export const createFontFamilyPlugin = createPluginFactory({
  key: MARK_FONT_FAMILY,
  inject: {
    props: {
      nodeKey: MARK_FONT_FAMILY,
    },
  },
  then: (editor, { type }) => ({
    deserializeHtml: {
      isLeaf: true,
      getNode: (element) => ({ [type]: element.style.fontFamily }),
      rules: [
        {
          validStyle: {
            fontFamily: '*',
          },
        },
      ],
    },
  }),
});