import { 
    createBoldPlugin,
    createBlockquotePlugin,
    createCodePlugin,
    createHeadingPlugin,
    createParagraphPlugin,
    createPlugins,
    createUnderlinePlugin,
    ELEMENT_H1,
    ELEMENT_H2,
    TEditableProps,
    Value } from "@udecode/plate";
import {
  CodeBlockElement,
  createPlateUI,
  ELEMENT_CODE_BLOCK,
  ELEMENT_PARAGRAPH,
  StyledElement,
  withProps,
} from '@udecode/plate';


export const editableProps:IEditableProps = {
    placeholder: "Enter Text here",
    spellCheck: true,
    autoFocus: false
}  

export const plateUI = createPlateUI({
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
        margin: 0,
        padding: '4px 0',
        color: '#111',
      },
    },
    prefixClassNames: 'p',
  }),
});

let id = 0;

export const mapNodeId = (nodes: any) =>
  nodes.map((node: any) => {
    id++;
    return { ...node, id: id.toString() };
  });

export const plugins = createPlugins(
    [
        createBoldPlugin(),
        createHeadingPlugin(),
        createUnderlinePlugin(),
        createParagraphPlugin(),
        createCodePlugin(), // TODO: pass element as a plugin
        createBlockquotePlugin(),
    ],
    {
        components: plateUI,
    }
)

//--- TYPES ---
//export type MyValue = MyRootBlock[];
type IEditableProps = TEditableProps

