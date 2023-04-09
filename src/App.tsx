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
  const [bubble, toolbar, comments, fontFamily, fontTextAlign] = useStore(state => [state.bubble, state.toolbar, state.comments, state.fontFamily, state.fontTextAlign]);
  const [showSettings, setShowSettings] = useState(false);
//  const [val, setVal] = useState(""); //  to meaure state  temporarily
   const editor = useMyPlateEditorRef();
   const setFont = (x: string) => 'font-' + x; 

  const toggleSettings = () => {
      setShowSettings(!showSettings);
  }

  return (
    <PlateProvider plugins={plugins}
        initialValue={
          JSON.parse(textValue) as Value
        }
         onChange={(val:Value) => {
         // setVal(JSON.stringify(val))
          setTextValue(JSON.stringify(val))
        }}
    >
    <div className="body font-center">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
          <h1>Editor</h1>
          <span style={{ marginLeft: '10vw', textDecoration:'underline'}} onClick={toggleSettings}> Settings </span>
      </div>
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

        {/* <MarkToolbarButton
//          tooltip={{content:'Bold (⌘+B)'}}
          type={getPluginType(editor, MARK_STRIKETHROUGH)}
          icon={<h1 style={tooltipStyle.strikethrough}>S</h1>}
        /> */}

      </div>
        )}

          {
            bubble && <MarkBalloonToolbar displayComments={comments}/>
          }
    <div className={"editor "+ setFont(fontFamily) + " " + setFont(fontTextAlign)}>
      <Plate 
         editableProps={editableProps} 
         // resolve issue of JSON.parse error
//            initialValue={JSON.parse(textValue) as Value}

         plugins={plugins}

        >
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
