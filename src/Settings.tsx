import React from 'react';
import { EditorState, options, useStore } from './store';
 import { shallow } from 'zustand/shallow';
//import { EditorState } from './store';
import styles from './Settings.css';

// this is the settings component, it should hover over the editor and allow the user to change the settings
// for the editor, such as the theme, font, etc.


export const Settings:React.FC<{toggleSettings: ()=>void}> = ({toggleSettings}) => {
    const state = useStore(state => state, shallow);
    return (
        <div className={styles.settings}>
            <h1>Settings </h1>
            <span 
            onClick={toggleSettings}
            style={{fontSize: '16px', cursor: 'pointer', textDecoration: 'underline', fontWeight: '500', marginLeft: '10vw', position: 'absolute', top: 50, right: 50}}>close</span>
            <ul className={styles['settings-list']>
                {/* <li className={state.theme==='dark' ? 'enabled': ""}>Dark mode</li> */}
                {
                    (Object.keys(state) as any[]).map((key: keyof typeof state, idx) => {
                        if (key.startsWith("toggle")) {
                            let k = key.slice(6) as keyof EditorState;
                            return (
                                <li key={idx} className={state[k] ? styles.enabled : ""} onClick={()=>typeof state[key] === "function" && (state[key] as ((f:any)=>void))(state[k])}>toggle {k}</li>
                            )
                        }
                        return <></>
                    })
                }
                <li className={styles['multiple-item']}>
                    <button onClick={() => state.setfontSize(state.fontSize+1)}>+</button>
                    fontSize - {state.fontSize}
                    <button onClick={() => state.setfontSize(state.fontSize-1)}>-</button>
                </li>
                {/** toggles settings */}
                {
                    (Object.keys(options) as any[]).map((key: keyof typeof options, idx) => {
                        if (typeof options[key] === 'object') {
                            return (
                                <li  key={idx} className={styles['multiple-item']}>
                                    {key} {"   "}
                                    {options[key].map((option) => {
                                        return <span  key={idx} onClick={() => (state[("set" + key) as keyof EditorState] as any)(option)} className={state[key]===option? styles.enabled:""}>{option}</span>
                                    })}
                                </li>
                            )
                        }
                    })
                }

            {/* <li className='enabled'>Dark mode</li>
            <li className='enabled'>Word Wrap</li>
            <li className='enabled'>Drag and Drop</li>
            <li>Enable Find</li>
            <li>Enable Quick Suggestions</li>
            <li className='multiple-item'><button onClick={() => setFontSize(fontSize+1)}>+</button>Font Size - {fontSize}<button onClick={() => setFontSize(fontSize+1)}>-</button></li>
            <li className='multiple-item'><button>+</button>Tab Size - 4<button>-</button></li>
            <li>Shortcuts</li> */}
            </ul>


        </div>
    )
}
