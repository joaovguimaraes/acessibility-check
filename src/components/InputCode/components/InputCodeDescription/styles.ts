import styled from 'styled-components/native';

export const Link = styled.TouchableOpacity.attrs(_ => {
  return {
    activeOpacity: 1,
  };
})`
  height: 16px;
  border-bottom-width: 1px;

  ${props => {
    const {theme} = props;

    return `
      border-bottom-color: ${theme.alias.color.text.descriptionColor};
    `;
  }}
`;
