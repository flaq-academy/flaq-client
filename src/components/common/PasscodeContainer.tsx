/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect, useRef} from 'react';
import {
  StyleProp,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import PasscodeDot from './PasscodeDot';
import FlaqInput from './flaqui/FlaqInput';
import FlaqPasswordInput from './flaqui/FlaqPasswordInput';

type Props = {
  code: string;
  setCode: any;
};

export const PASSCODE_LENGTH = 8;
const PasscodeContainer: FC<Props> = ({code, setCode}) => {
  // const textInputRef = useRef<TextInput>(null);

  // const tempArray = new Array(PASSCODE_LENGTH).fill(0);

  // const focusMainInput = async () => {
  //   const textInput = textInputRef.current! as TextInput;
  //   textInput.focus();
  // };
  // console.log(code);

  // const handleOnPress = async () => {
  //   await focusMainInput();
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     focusMainInput();
  //   }, 500);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  const passcodeContainerStyle: StyleProp<ViewStyle> = {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
    paddingVertical: 20,
  };

  const hiddenInput: StyleProp<TextStyle> = {
    borderColor: '#fff3',
    marginTop: 20,
    borderRadius: 3,
    color: 'white',
    padding: 14,
    display: 'none',
    // borderWidth: 1,
    fontFamily: 'SpaceMono-Bold',
  };

  const passcodeStyle: StyleProp<TextStyle> = {
    fontFamily: 'SpaceMono-Bold',
    marginTop: 34,
  };

  return (
    <>
      {/* <TouchableOpacity
        onPress={() => handleOnPress()}
        style={passcodeContainerStyle}>
        {tempArray.map((_, index) => {
          return <PasscodeDot key={index} isFilled={code.length - index > 0} />;
        })}
      </TouchableOpacity> */}
      {/* <SolaceInput
        forwardRef={textInputRef}
        hidden={true}
        mt={16}
        maxLength={PASSCODE_LENGTH}
        returnKeyType="done"
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        value={code}
        onChangeText={setCode}
        autoFocus={true}
      /> */}
      <View style={passcodeStyle}>
        <FlaqPasswordInput
          value={code}
          maxLength={PASSCODE_LENGTH}
          onChangeText={x => setCode(x)}
          returnKeyType="done"
          textAlign={'center'}
          placeholder="--------"
          textContentType="oneTimeCode"
          style={{marginTop: 10}}
          autoFocus={true}
        />
      </View>
    </>
  );
};

export default PasscodeContainer;
