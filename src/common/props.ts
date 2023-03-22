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
    createExitBreakPlugin,
    createSoftBreakPlugin,
    createListPlugin,
    createTrailingBlockPlugin,
    createAutoformatPlugin,
    createSelectOnBackspacePlugin} from "@udecode/plate";
import {createDndPlugin} from '@udecode/plate-ui-dnd'
import { plateUI } from "./components";
import { autoformatOptions, exitBreakOptions, selectOnBackspaceOptions, softBreakOptions, trailingBlockOptions } from "./options";


export const editableProps:IEditableProps = {
    placeholder: "Enter Text here",
    spellCheck: true,
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
          createDndPlugin({ options: { enableScroller: true } }),
],
    {
        components: plateUI,
    }
)

//--- TYPES ---
//export type MyValue = MyRootBlock[];
type IEditableProps = TEditableProps

