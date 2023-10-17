/* eslint-disable react-native/no-inline-styles */
import { useDS } from '@meiuca/dsaas-react-native-core';
import React from 'react';
import { Animated } from 'react-native';

interface Props {
  showing: boolean;
}

export function InputCodeBlink({ showing }: Props) {
  const { theme } = useDS();

  const opacityRef = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityRef, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(opacityRef, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    );

    loop.start();
    return () => loop.stop();
  }, [opacityRef, showing]);

  if (!showing) {
    return <></>;
  }

  return (
    <Animated.View
      testID={'input-code.blink'}
      style={{
        position: 'absolute',
        width: 2,
        height: 20,
        opacity: opacityRef,
        backgroundColor: theme.alias.color.active.placeholderColor,
      }}
    />
  );
}
