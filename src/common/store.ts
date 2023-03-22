/**
 * Plate store, Slate context
 */

import { getTEditor, useEditorRef, useEditorState, PlateId, usePlateEditorRef, usePlateEditorState, usePlateSelectors, usePlateActions, usePlateStates, createTEditor, CreatePlateEditorOptions, createPlateEditor, PluginOptions, PlatePlugin, NoInfer, createPluginFactory, PlatePluginComponent, createPlugins, AutoformatRule } from "@udecode/plate";
import { MyEditor, MyValue, MyPlatePlugin, MyOverrideByKey } from "../types";

export const ARROW = true;
export const THEME = 'dark';
export const DND_ENABLED = false;
export const getMyEditor = (editor: MyEditor) =>
  getTEditor<MyValue, MyEditor>(editor);
export const useMyEditorRef = () => useEditorRef<MyValue, MyEditor>();
export const useMyEditorState = () => useEditorState<MyValue, MyEditor>();
export const useMyPlateEditorRef = (id?: PlateId) =>
  usePlateEditorRef<MyValue, MyEditor>(id);
export const useMyPlateEditorState = (id?: PlateId) =>
  usePlateEditorState<MyValue, MyEditor>(id);
export const useMyPlateSelectors = (id?: PlateId) =>
  usePlateSelectors<MyValue, MyEditor>(id);
export const useMyPlateActions = (id?: PlateId) =>
  usePlateActions<MyValue, MyEditor>(id);
export const useMyPlateStates = (id?: PlateId) =>
  usePlateStates<MyValue, MyEditor>(id);

/**
 * Utils
 */
export const createMyEditor = () => createTEditor() as MyEditor;
export const createMyPlateEditor = (
  options: CreatePlateEditorOptions<MyValue, MyEditor> = {}
) => createPlateEditor<MyValue, MyEditor>(options);
export const createMyPluginFactory = <P = PluginOptions>(
  defaultPlugin: PlatePlugin<NoInfer<P>, MyValue, MyEditor>
) => createPluginFactory(defaultPlugin);
export const createMyPlugins = (
  plugins: MyPlatePlugin[],
  options?: {
    components?: Record<string, PlatePluginComponent>;
    overrideByKey?: MyOverrideByKey;
  }
) => createPlugins<MyValue, MyEditor>(plugins, options);

export type MyAutoformatRule = AutoformatRule<MyValue, MyEditor>;
