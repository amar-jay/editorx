import {
  ELEMENT_LI,
  AutoformatBlockRule,
  ELEMENT_CODE_LINE,
  ELEMENT_DEFAULT,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_OL,
  ELEMENT_UL,
  getParentNode,
  getPluginType,
  insertEmptyCodeBlock,
  isElement,
  isType,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  PlateEditor,
  toggleList,
  unwrapList,
  SelectOnBackspacePlugin,
  ELEMENT_HR,
  ELEMENT_H1,
} from "@udecode/plate"
import {
    AutoformatPlugin,
    AutoformatRule,
    ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_PARAGRAPH,
  ELEMENT_TD,
  ExitBreakPlugin,
  KEYS_HEADING, 
  PlatePlugin,
  SoftBreakPlugin,
  TrailingBlockPlugin,
} from '@udecode/plate';

/** Options for hard quiting of editor <Ctrl-S-Enter> / <Ctrl-Enter> */
export const exitBreakOptions: Partial<PlatePlugin<ExitBreakPlugin>> = {
  options: {
    rules: [
      {
        hotkey: "mod+enter",
      },
      {
        hotkey: "mod+shift+enter",
        before: true,
      },
      {
        hotkey: "enter",
        query: {
          start: true,
          end: true,
          allow: KEYS_HEADING,
        },
      },
    ],
  },
}

/** Options for soft break of editor <S-Enter> */
export const softBreakOptions: Partial<PlatePlugin<SoftBreakPlugin>> = {
  options: {
    rules: [
      { hotkey: "shift+enter" },
      {
        hotkey: "enter",
        query: {
          allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
        },
      },
    ],
  },
};

/** Options for trailing block for type `p`*/
export const trailingBlockOptions: Partial<PlatePlugin<TrailingBlockPlugin>> = {
  options: {
    type: ELEMENT_PARAGRAPH,
  },
};


export const selectOnBackspaceOptions: Partial<
  PlatePlugin<SelectOnBackspacePlugin>
> = {
  options: {
    query: {
      allow: [ELEMENT_HR],
    },
  },
};


export const preFormat: AutoformatBlockRule['preFormat'] = (editor) =>
  unwrapList(editor);

export const format = (editor: PlateEditor, customFormatting: () => void) => {
  if (editor.selection) {
    const parentEntry = getParentNode(editor, editor.selection);
    if (!parentEntry) return;
    const [node] = parentEntry;
    if (
      isElement(node) &&
      !isType(editor, node, ELEMENT_CODE_BLOCK) &&
      !isType(editor, node, ELEMENT_CODE_LINE)
    ) {
      customFormatting();
    }
  }
};

export const formatList = (editor: PlateEditor, elementType: string) => {
  format(editor, () =>
    toggleList(editor, {
      type: elementType,
    }),
  );
};

// TODO: autoformat rules
export const autoformatRules: AutoformatRule[] = [
  {
    match: '# ',
    type: ELEMENT_H1,
    mode: 'block',
    preFormat,
  },
  {
    match: '## ',
    type: ELEMENT_H2,
    mode: 'block',
    preFormat,
  },
  {
    match: '### ',
    type: ELEMENT_H3,
    mode: 'block',
    preFormat,
  },
  {
    match: '---',
    type: ELEMENT_HR,
    mode: 'block',
    preFormat,
  },
  {
    match: '> ',
    type: ELEMENT_BLOCKQUOTE,
    mode: 'block',
    preFormat,
  },
  {
    mode: 'block',
    type: ELEMENT_CODE_BLOCK,
    match: '``` ',
    triggerAtBlockStart: false,
    preFormat,
    format: (editor) => {
      insertEmptyCodeBlock(editor, {
        defaultType: getPluginType(editor, ELEMENT_DEFAULT),
        insertNodesOptions: { select: true },
      });
    },
  },
  {
    mode: 'block',
    type: ELEMENT_LI,
    match: ['* ', '- '],
    preFormat,
    format: (editor) => formatList(editor, ELEMENT_UL),
  },
  {
    mode: 'block',
    type: ELEMENT_LI,
    match: ['1. ', '1) '],
    preFormat,
    format: (editor) => formatList(editor, ELEMENT_OL),
  },
  {
    mode: 'mark',
    type: [MARK_BOLD, MARK_ITALIC],
    match: '***',
  },
  {
    mode: 'mark',
    type: [MARK_UNDERLINE, MARK_ITALIC],
    match: '__*',
  },
  {
    mode: 'mark',
    type: [MARK_UNDERLINE, MARK_BOLD],
    match: '__**',
  },
  {
    mode: 'mark',
    type: [MARK_UNDERLINE, MARK_BOLD, MARK_ITALIC],
    match: '___***',
  },
  {
    mode: 'mark',
    type: MARK_BOLD,
    match: '**',
  },
  {
    mode: 'mark',
    type: MARK_UNDERLINE,
    match: '__',
  },
  {
    mode: 'mark',
    type: MARK_ITALIC,
    match: '*',
  },
  {
    mode: 'mark',
    type: MARK_ITALIC,
    match: '_',
  },
  {
    mode: 'mark',
    type: MARK_STRIKETHROUGH,
    match: '~~',
  },
  {
    mode: 'mark',
    type: MARK_SUPERSCRIPT,
    match: '^',
  },
  {
    mode: 'mark',
    type: MARK_SUBSCRIPT,
    match: '~',
  },
  {
    mode: 'mark',
    type: MARK_CODE,
    match: '`',
  },
];

export const autoformatOptions: Partial<PlatePlugin<AutoformatPlugin>> = {
  options: {
    rules: autoformatRules,
   enableUndoOnDelete: true
  }
}
/** Options for **font family** */
export const fontFamilyOptions = {
  options: {
    type: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE ],
  },
};
