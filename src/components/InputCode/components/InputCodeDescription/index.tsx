import React from 'react';
import { Text, View } from 'react-native';

import * as S from './styles';


import { HyperlinkProps } from '../../types';
import { DsDescription, useDS } from '@meiuca/dsaas-react-native-core';

interface Props {
  label?: string;
  hyperlink?: HyperlinkProps;
}

export function InputCodeDescription({ label, hyperlink }: Props) {
  const { theme } = useDS();

  const textColor = theme.alias.color.text.descriptionColor;

  return (
    <Text>
      {label &&
        label.split(' ').map((item, index) => {
          const spacing = index === label.split(' ').length - 1 ? '' : ' ';

          return (
            <View key={index}>
              <DsDescription color={textColor}>
                {item}
                {spacing}
              </DsDescription>
            </View>
          );
        })}

      {hyperlink && (
        <S.Link onPress={hyperlink?.onPress}>
          <DsDescription color={textColor}>{hyperlink?.text}</DsDescription>
        </S.Link>
      )}
    </Text>
  );
}
