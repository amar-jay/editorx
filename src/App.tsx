import { Plate, Value } from '@udecode/plate'
import { useState } from 'react';
import './App.css'

import { MdFormatBold, MdFormatItalic, MdFormatUnderlined } from 'react-icons/md';
import { MarkBalloonToolbar } from './common/plugins/balloon';
import {jsxInitialValue, initialValue} from './common/initial';
import {editableProps, plugins } from './common/props'

function App() {
  const [textValue, setTextValue] = useState<Value | null>(null);

  return (
    <div className="body">
      <h1>Editor</h1>
      <div className="icons">
        <MdFormatBold />
        <MdFormatItalic />
        <MdFormatUnderlined />
      </div>
    <div className="editor">
      <Plate 
         editableProps={editableProps} 
         initialValue={[...initialValue, ...jsxInitialValue]}
         plugins={plugins}
         onChange={(val) => setTextValue(val)}
        >
          <MarkBalloonToolbar />
          </Plate>
    </div>
      <div className="debug">{JSON.stringify(textValue)}</div>
    </div>
  )
}

export default App
