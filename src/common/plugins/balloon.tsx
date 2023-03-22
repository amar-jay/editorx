import React, { ReactNode } from 'react';
import { MdFormatBold, MdFormatItalic, MdFormatUnderlined } from 'react-icons/md';
import { TippyProps } from '@tippyjs/react';
import {
  BalloonToolbar,
  BalloonToolbarProps,
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MarkToolbarButton,
  WithPartial,
} from '@udecode/plate';
import { useMyPlateEditorRef,
  ARROW,
  THEME,
 } from '../store';

export const markTooltip: TippyProps = {
  arrow: ARROW,
  delay: 0,
  duration: [0, 0],
  hideOnClick: false,
  offset: [0, 17],
  placement: 'top',
};

export const MarkBalloonToolbar = (props: WithPartial<BalloonToolbarProps, 'children'>) => {
  const {
    children,
    ...balloonToolbarProps
  } = props;

   const editor = useMyPlateEditorRef();



  const boldTooltip: TippyProps = { content: 'Bold', ...markTooltip };
  const italicTooltip: TippyProps = { content: 'Italic', ...markTooltip };
  const underlineTooltip: TippyProps = {
    content: 'Underline',
    ...markTooltip,
  };

  return (
    <BalloonToolbar theme={THEME} arrow={ARROW} {...balloonToolbarProps}>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<MdFormatBold className="tooltip-icon"/>}
        tooltip={boldTooltip}
        actionHandler="onMouseDown"
      /> 
 

  
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<MdFormatItalic  className="tooltip-icon"/>}
        tooltip={italicTooltip}
        actionHandler="onMouseDown"
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<MdFormatUnderlined  className="tooltip-icon"/>}
        tooltip={underlineTooltip}
        actionHandler="onMouseDown"
      />
      {children}
    </BalloonToolbar>
  );
};
