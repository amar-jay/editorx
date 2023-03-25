//import { MdFormatBold, MdFormatItalic, MdFormatUnderlined } from 'react-icons/md';
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
  MARK_CODE,
  MARK_STRIKETHROUGH,
  PlateCommentToolbarButton,
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
//  className: 'tooltip',
};

export const tooltipStyle = {
  bold: {
    fontWeight: '900',
    display: 'inline-block',
    fontSize: '18px',
    color: '#999',
  },
  italic: {
    fontStyle: 'italic',
    display: 'inline-block',
    fontSize: '18px',
    color: '#999',
  },
  underline: {
    textDecoration: 'underline',
    display: 'inline-block',
    fontSize: '18px',
    color: '#999',
  },
  strikethrough: {
    textDecoration: 'line-through',
    display: 'inline-block',
    fontSize: '18px',
    color: '#999',
  },
  icon: {
    display: 'inline-block',
    fontSize: '18px',
    color: '#999',
  },
  tip: {
    color: "#000",
    backgroundColor: '#ccc',
  }
};

export const MarkBalloonToolbar = (props: WithPartial<BalloonToolbarProps, 'children'> & {displayComments: boolean}) => {
  const {
    children,
    displayComments,
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
        icon={
          <h1 style={tooltipStyle.bold} >B
          {/*<MdFormatBold
                style={tooltipStyle.icon}  className="tooltip-icon"/>*/}
          </h1>
        }
        tooltip={boldTooltip}
        actionHandler="onMouseDown"
      /> 
  
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={
          <h1 style={tooltipStyle.italic} >I
          {/*<MdFormatItalic 
                style={tooltipStyle.icon}  className="tooltip-icon"/>*/}
          </h1>
        }
        tooltip={italicTooltip}
        actionHandler="onMouseDown"
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={
          <h1 style={tooltipStyle.underline} 
          >U
          {/*<MdFormatUnderlined 
                style={tooltipStyle.icon}  className="tooltip-icon"/>*/}
          </h1>
        }

        tooltip={underlineTooltip}
        actionHandler="onMouseDown"
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={
          <h1 style={tooltipStyle.strikethrough} >S
          {/*<MdFormatItalic 
                style={tooltipStyle.icon}  className="tooltip-icon"/>*/}
          </h1>
        }
        tooltip={italicTooltip}
        actionHandler="onMouseDown"
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_CODE)}
        icon={
          <h1 style={tooltipStyle.bold} >{'<>'}
          {/*<MdFormatItalic 
                style={tooltipStyle.icon}  className="tooltip-icon"/>*/}
          </h1>
        }
        tooltip={italicTooltip}
        actionHandler="onMouseDown"
      />
      {
        displayComments && (
          <PlateCommentToolbarButton
            icon={
              <h1 style={tooltipStyle.icon} >{'{...}'}
              </h1>
            }
            actionHandler="onMouseDown"
          />
        )
      }


      {children}
    </BalloonToolbar>
  );
};
