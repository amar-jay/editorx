/** @jsxRuntime classic */
/** @jsx jsx */
import { Value } from '@udecode/plate';
import { jsx } from '@udecode/plate-test-utils';
import { mapNodeId } from './props';

jsx;

export const jsxInitialValue: any = mapNodeId(
  <fragment>
    <hh1>🧱 Elements</hh1> 
    <hblockquote>Blockquote</hblockquote>
    {/*<hh2>🔥 Basic Elements</hh2> */}
    <hp>Lorem is here. I shall be done.</hp>
  </fragment>
);

export const initialValue:Value = [{
    type: "h1",
    children: [{text: "Untitled"}]
},{
    type: "p",
    children: [{
      text: "enter text here",
    }]
},
  /*
  {
    type: "blockquote",
    children: [{text: " Blockquote"}]
},
  */
];

