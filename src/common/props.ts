import { 
    createBoldPlugin,
    createBlockquotePlugin,
    createCodePlugin,
    createHeadingPlugin,
    createParagraphPlugin,
    createPlugins,
    createUnderlinePlugin,
    TEditableProps,
    createCodeBlockPlugin,
    createItalicPlugin,
    createSubscriptPlugin,
    createSuperscriptPlugin,
    createHorizontalRulePlugin,
    createExitBreakPlugin,
    createSoftBreakPlugin,
    createListPlugin,
    createTrailingBlockPlugin,
    createAutoformatPlugin,
    createFontFamilyPlugin,
    createCommentsPlugin,
    createSelectOnBackspacePlugin} from "@udecode/plate";
import { plateUI } from "./components";
import { autoformatOptions, exitBreakOptions, fontFamilyOptions, selectOnBackspaceOptions, softBreakOptions, trailingBlockOptions } from "./options";
//import {  } from "./plugins/fontfamily";


export const editableProps:IEditableProps = {
    placeholder: "Enter Text here",
    spellCheck: false,
    autoFocus: false
}  


let id = 0;

export const mapNodeId = (nodes: any) =>
  nodes.map((node: any) => {
    id++;
    return { ...node, id: id.toString() };
  });

export const plugins = createPlugins(
    [
        createHeadingPlugin(),
        createParagraphPlugin(),
        createBlockquotePlugin(),
        createCodeBlockPlugin(),
        createListPlugin(),
        createHorizontalRulePlugin(),

        createBoldPlugin(),
        createItalicPlugin(),
        createUnderlinePlugin(),
        createSubscriptPlugin(),
        createSuperscriptPlugin(),
        createCodePlugin(), // TODO: pass element as a plugin
        

        // actions
        createExitBreakPlugin(exitBreakOptions),
        createSoftBreakPlugin(softBreakOptions),
        createTrailingBlockPlugin(trailingBlockOptions),
        createAutoformatPlugin(autoformatOptions),
        createSelectOnBackspacePlugin(selectOnBackspaceOptions),
        // other
        createFontFamilyPlugin(fontFamilyOptions),
        createCommentsPlugin()
],
    {
        components: plateUI,
    }
)

//--- TYPES ---
//export type MyValue = MyRootBlock[];
type IEditableProps = TEditableProps

