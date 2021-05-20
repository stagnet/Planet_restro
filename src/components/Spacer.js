import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const TopSmall = styled(View)`
  margintop: ${(props) => props.theme.space[1]};
`;
const TopMedium = styled(View)`
  margintop: ${(props) => props.theme.space[2]};
`;
const TopLarge = styled(View)`
  margintop: ${(props) => props.theme.space[3]};
`;

const LeftSmall = styled(View)`
  margintop: ${(props) => props.theme.space[1]};
`;
const LeftMedium = styled(View)`
  margintop: ${(props) => props.theme.space[2]};
`;
const LeftLarge = styled(View)`
  margintop: ${(props) => props.theme.space[3]};
`;
export const Spacer = ({ variant }) => {
  if (variant === 'top.large') {
    return <TopLarge />;
  }
  if (variant === 'top.medium') {
    return <TopMedium />;
  }
  if (variant === 'top.small') {
    return <TopSmall />;
  }
  if (variant === 'left.large') {
    return <LeftLarge />;
  }
  if (variant === 'left.medium') {
    return <LeftMedium />;
  }
  if (variant === 'left.small') {
    return <LeftSmall />;
  }
};
