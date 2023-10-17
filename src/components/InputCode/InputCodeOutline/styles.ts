import styled, {DefaultTheme} from 'styled-components/native';

interface Props {
  pressed: boolean;
}

interface FProps extends DefaultTheme, Props {}

export const Container = styled.View`
  position: relative;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${props => {
    const {theme} = props;

    return `
      gap: ${theme.globals.shapes.spacing.s1x}px;
    `;
  }}
`;

export const Code = styled.TouchableOpacity.attrs(_ => {
  return {
    activeOpacity: 1,
  };
})<Props>`
  justify-content: center;
  align-items: center;

  ${props => {
    const {theme, pressed} = props;

    return `
      width: ${theme.globals.shapes.size.s5x}px;
      height: ${theme.globals.shapes.size.s7x}px;
      background-color: ${_getBackgroundColor({...theme, pressed})};

      border-radius: ${theme.globals.shapes.border.radiusXs}px;
      border-width: ${theme.alias.defaultt.borderWidth}px;
      border-color: ${theme.alias.color.elements.bordercolor};
    `;
  }}
`;

export const CodeText = styled.Text`
  text-transform: uppercase;

  ${props => {
    const {theme} = props;

    return `
      color: ${theme.alias.color.active.placeholderColor};
      font-family: ${theme.globals.typographys.fontFamilyBase};
      font-size: ${theme.globals.typographys.fontSizeSm}px;
      font-weight: ${theme.globals.typographys.fontWeightRegular};
    `;
  }}
`;

export const DescriptionView = styled.View`
  margin-top: ${props => props.theme.globals.shapes.spacing.s2x}px;
  align-items: center;
`;

export const InputView = styled.View`
  position: absolute;
  width: 0px;
  height: 0px;
`;

export const Dot = styled.View`
  ${props => {
    const {theme} = props;

    return `
      width: ${theme.globals.shapes.size.s1x}px;
      height: ${theme.globals.shapes.size.s1x}px;
      background-color: ${theme.alias.color.active.labelColor};
      border-radius: ${theme.globals.shapes.border.radiusCircular}px;
    `;
  }}
`;

function _getBackgroundColor({alias, pressed}: FProps) {
  if (pressed) {
    return alias.mixin.pressedOutline;
  }

  return 'transparent';
}
