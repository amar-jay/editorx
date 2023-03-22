/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@udecode/plate-test-utils';
import { mapNodeId } from './common/props';

jsx;

export const jsxInitialValue: any = mapNodeId(
  <fragment>
    <hh1>🧱 Elements</hh1> 
    <hh2>🔥 Basic Elements</hh2>
    <hp>Lorem is here. I shall be done.</hp>
    <hblockquote>Blockquote</hblockquote>
  </fragment>
);

export const initialValue:Value = [{
    type: "h2",
    children: [{text: "Title"}]
},{
    type: "p",
    children: [{text: "Paragraph Text"}]
},
  /*
  {
    type: "blockquote",
    children: [{text: " Blockquote"}]
},
  */
];

