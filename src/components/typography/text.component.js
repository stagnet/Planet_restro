import styled from 'styled-components/native';

const defaultTextStyles = (theme) => `
font-family: ${theme.fonts.body};
font-weight: ${theme.fontWeights.regular};
color: ${theme.colors.text.primary};
flex-wrap: wrap;
margin-top:0px;
margin-bottom:0px;
`;

const body = (theme) => `
font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
color: ${theme.colors.text.error};
`;

const caption = (theme) => `
font-size: ${theme.fontSizes.caption};
font-weight: ${theme.fontWeights.bold};
`;

const lable = (theme) => `
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  caption,
  error,
  hint,
  lable,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${(props) => variants[props.variant](props.theme)}
`;

Text.defaultProps = {
  variant: 'body',
};
