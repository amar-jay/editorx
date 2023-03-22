import { Plate, Value } from '@udecode/plate'
import { useState } from 'react';
import './App.css'
import {jsxInitialValue, initialValue} from './plateUI';
import {editableProps, plugins } from './common/props'

function App() {
  const [textValue, setTextValue] = useState<Value | null>(null);

  return (
    <div className="body">
      <h1>Editor</h1>
    <div className="editor">
      <Plate editableProps={editableProps} 
         initialValue={[...initialValue, ...jsxInitialValue]}
          onChange={(val) => setTextValue(val)}
         plugins={plugins}
        />
    </div>
      <div className="debug">{JSON.stringify(textValue)}</div>
    </div>
  )
}

export default App
