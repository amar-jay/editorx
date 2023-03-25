import { Plate, Value } from '@udecode/plate'
//import { useState } from 'react';
import './App.css'
import { Settings } from './Settings'

import { MdFormatBold, MdFormatItalic, MdFormatUnderlined } from 'react-icons/md';
import { MarkBalloonToolbar } from './common/plugins/balloon';
import {jsxInitialValue, initialValue} from './common/initial';
import {editableProps, plugins } from './common/props'
import { usePersistedStore } from './store';
import { useState } from 'react';

function App() {
  const [textValue, setTextValue] = usePersistedStore(state => [
      state.textStorage, state.setTextStorage 
      ]);
  const [showSettings, setShowSettings] = useState(false);
  const [val, setVal] = useState("");

  const toggleSettings = () => {
      setShowSettings(!showSettings);
  }

  return (
    <div className="body">
      <h1>Editor</h1>
      <span style={{ position: 'absolute', top: '35px', right: '10px', marginLeft: '10vw', textDecoration:'underline'}} onClick={toggleSettings}> Settings </span>
      <div className="icons">
        <MdFormatBold />
        <MdFormatItalic />
        <MdFormatUnderlined />
      </div>
    <div className="editor">
      <Plate 
         editableProps={editableProps} 
         // resolve issue of JSON.parse error
//            initialValue={JSON.parse(textValue) as Value}
        initialValue={
          JSON.parse(textValue) as Value
        }
         plugins={plugins}
         onChange={(val:Value) => {
          setVal(JSON.stringify(val))
          setTextValue(JSON.stringify(val))
        }}
        >
          <MarkBalloonToolbar />
          </Plate>
    </div>
    <div className="debug">{}{textValue}</div>
    {
        showSettings && <Settings toggleSettings={toggleSettings}/>
    }
    </div>
  )
}

export default App
