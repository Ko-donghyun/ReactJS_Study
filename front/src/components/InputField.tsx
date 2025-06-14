import React, {ForwardedRef, forwardRef, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInputProps,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../constants';
import {mergeRefs} from '../utils';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = forwardRef(
  (
    {disabled = false, error, touched, ...props}: InputFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {
    const innerRef = useRef<TextInput | null>(null); // 주변 클릭시 입력 가능하게

    const handlerPressInput = () => {
      innerRef.current?.focus();
    };
    return (
      <Pressable onPress={handlerPressInput}>
        <View
          style={[
            styles.container,
            disabled && styles.disabled,
            touched && Boolean(error) && styles.inputError,
          ]}>
          <TextInput
            // ref={innerRef}
            // ref={node => {
            //   ref?.current = node;
            //   innerRef.current = node;
            // }}
            ref={ref ? mergeRefs(innerRef, ref) : innerRef}
            editable={!disabled}
            placeholderTextColor={colors.GRAY_500}
            style={[styles.input, disabled && styles.disabled]}
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
            {...props}
          />
          {touched && Boolean(error) && (
            <Text style={styles.error}>{error}</Text>
          )}
        </View>
      </Pressable>
    );
  },
);

// function InputField({
//   disabled = false,
//   error,
//   touched,
//   ...props
// }: InputFieldProps) {
//   const innerRef = useRef<TextInput | null>(null); // 주변 클릭시 입력 가능하게

//   const handlerPressInput = () => {
//     innerRef.current?.focus();
//   };
//   return (
//     <Pressable onPress={handlerPressInput}>
//       <View
//         style={[
//           styles.container,
//           disabled && styles.disabled,
//           touched && Boolean(error) && styles.inputError,
//         ]}>
//         <TextInput
//           ref={innerRef}
//           editable={!disabled}
//           placeholderTextColor={colors.GRAY_500}
//           style={[styles.input, disabled && styles.disabled]}
//           autoCapitalize="none"
//           spellCheck={false}
//           autoCorrect={false}
//           {...props}
//         />
//         {touched && Boolean(error) && <Text style={styles.error}>{error}</Text>}
//       </View>
//     </Pressable>
//   );
// }

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {fontSize: 16, color: colors.BLACK, padding: 0},
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  error: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700,
  },
});

export default InputField;
