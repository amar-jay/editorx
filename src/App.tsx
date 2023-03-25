import { MarkToolbarButton, Plate, Value,
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_CODE,
  MARK_STRIKETHROUGH,
  PlateFloatingComments,
  MARK_FONT_SIZE,
 } from '@udecode/plate'
//import { useState } from 'react';
import './App.css'
import { Settings } from './Settings'
import { PlateProvider } from '@udecode/plate'

import { MarkBalloonToolbar, tooltipStyle } from './common/plugins/balloon';
import {jsxInitialValue, initialValue} from './common/initial';
import {editableProps, plugins } from './common/props'
import { usePersistedStore, useStore } from './store';
import { useState } from 'react';
import { useMyPlateEditorRef } from './common/store';

function App() {
  const [textValue, setTextValue] = usePersistedStore(state => [
      state.textStorage, state.setTextStorage 
      ]);

  // settings config store
  const [bubble, toolbar, comments] = useStore(state => [state.bubble, state.toolbar, state.comments]);
  const [showSettings, setShowSettings] = useState(false);
  const [val, setVal] = useState("");
   const editor = useMyPlateEditorRef();

  const toggleSettings = () => {
      setShowSettings(!showSettings);
  }

  return (
    <PlateProvider plugins={plugins}
        initialValue={
          JSON.parse(textValue) as Value
        }
         onChange={(val:Value) => {
          setVal(JSON.stringify(val))
          setTextValue(JSON.stringify(val))
        }}
    >
    <div className="body">
      <h1>Editor</h1>
      <span style={{ position: 'absolute', top: '35px', right: '10px', marginLeft: '10vw', textDecoration:'underline'}} onClick={toggleSettings}> Settings </span>
      {
        toolbar && (
      <div className="icons">
        <MarkToolbarButton
//          tooltip={{content:'Bold (⌘+B)'}}
          type={getPluginType(editor, MARK_BOLD)}
          icon={<h1 style={tooltipStyle.bold}>B</h1>}
        />

        <MarkToolbarButton
//          tooltip={{content:'Bold (⌘+B)'}}
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<h1 style={tooltipStyle.italic}>I</h1>}
        />

        <MarkToolbarButton
//          tooltip={{content:'Bold (⌘+B)'}}
          type={getPluginType(editor, MARK_UNDERLINE)}
          icon={<h1 style={tooltipStyle.underline}>U</h1>}
        />

        <MarkToolbarButton
//          tooltip={{content:'Bold (⌘+B)'}}
          type={getPluginType(editor, MARK_STRIKETHROUGH)}
          icon={<h1 style={tooltipStyle.strikethrough}>S</h1>}
        />

      </div>
        )}
    <div className="editor">
      <Plate 
         editableProps={editableProps} 
         // resolve issue of JSON.parse error
//            initialValue={JSON.parse(textValue) as Value}

         plugins={plugins}

        >
          {
            bubble && <MarkBalloonToolbar displayComments={comments}/>
          }
          </Plate>
    </div>
    {
      comments && <PlateFloatingComments/>
    }
    <div className="debug">{}{textValue}</div>
    {
        showSettings && <Settings toggleSettings={toggleSettings}/>
    }
    </div></PlateProvider>
  )
}

export default App
