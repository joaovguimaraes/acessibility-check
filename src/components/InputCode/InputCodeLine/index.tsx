import React from 'react';
import {KeyboardTypeOptions, TextInput} from 'react-native';

import * as S from './styles';

import {HyperlinkProps} from '../types';
import {InputCodeDescription} from '../components/InputCodeDescription';
import {InputCodeBlink} from '../components/InputCodeBlink';

interface Props {
  itemsCount?: number;
  label?: string;
  hyperlink?: HyperlinkProps;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoFocus?: boolean;
  onChangeCode?: (text: string) => void;
  onFinish?: () => void;
  testID?: string;
}

export function DsInputCodeLine({
  label,
  itemsCount = 3,
  hyperlink,
  keyboardType = 'number-pad',
  secureTextEntry = false,
  autoFocus = false,
  onChangeCode,
  onFinish,
  testID,
}: Props): React.ReactElement {
  const [code, setCode] = React.useState('');
  const [pressed, setPressed] = React.useState<boolean>(false);
  const [focused, setFocused] = React.useState<boolean>(false);

  const inputRef = React.useRef<TextInput>(null);

  const itemList: string[] = Array.from({length: itemsCount}, () => '');

  React.useEffect(() => {
    if (code.length === itemsCount && onFinish) {
      onFinish();
    }
  }, [code]);

  function _callKeyboard(): void {
    inputRef.current?.focus();
  }

  function _onChangeText(text: string): void {
    setCode(text);

    if (onChangeCode) {
      onChangeCode(text);
    }
  }

  function _getCode(index: number): React.ReactElement {
    if (code.length === 0) {
      return <></>;
    }

    if (secureTextEntry && code[index]) {
      return <S.Dot testID="input-code-line.dot" />;
    }

    return <S.CodeText>{code[index]}</S.CodeText>;
  }

  function _onPress(press: boolean): void {
    setPressed(press);
  }

  function _onFocused(focus: boolean) {
    setFocused(focus);
  }

  return (
    <S.Container testID={testID}>
      <S.Content>
        {itemList.map((_, index) => {
          return (
            <S.Code
              testID={'input-code-line.code-' + index}
              key={index}
              onPress={_callKeyboard}
              onPressIn={() => _onPress(true)}
              onPressOut={() => _onPress(false)}
              pressed={pressed}
              selected={code.length === index && focused}>
              {_getCode(index)}
              <InputCodeBlink showing={code.length === index && focused} />
            </S.Code>
          );
        })}
      </S.Content>

      <S.DescriptionView>
        <InputCodeDescription label={label} hyperlink={hyperlink} />
      </S.DescriptionView>

      <S.InputView>
        <TextInput
          testID={'input-code-line.input'}
          ref={inputRef}
          value={code}
          onChangeText={_onChangeText}
          onFocus={() => _onFocused(true)}
          onBlur={() => _onFocused(false)}
          maxLength={itemList.length}
          placeholder="Digite seu codigo"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoFocus={autoFocus}
        />
      </S.InputView>
    </S.Container>
  );
}
