import {colors} from '@/constants';
import React from 'react';
import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {makeViewDescriptorsSet} from 'react-native-reanimated/lib/typescript/reanimated2/ViewDescriptorsSet';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'medium';
  inValid?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

function CustomButton({
  label,
  variant = 'filled',
  size = 'large',
  inValid = false,
  ...props
}: CustomButtonProps) {
  //   console.log('screen', Dimensions.get('screen').height);
  //   console.log('window', Dimensions.get('window').height);
  return (
    <Pressable
      disabled={inValid}
      style={({pressed}) => [
        styles.container,
        // styles[variant],

        pressed ? styles[`${variant}Pressed`] : styles[variant],
        // pressed ? styles[`${variant}Pressed`] : styles[variant],
        inValid && styles.inValid,
      ]}
      {...props}>
      <View style={styles[size]}>
        <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inValid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: colors.PINK_700,
  },
  outlined: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
  },
  filledPressed: {
    backgroundColor: colors.PINK_500,
  },
  outlinedPressed: {
    color: colors.PINK_700,
    borderWidth: 1,
    opacity: 0.5,
  },
  text: {fontSize: 16, fontWeight: '700'},
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.PINK_700,
  },
  large: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 15 : 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 9,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default CustomButton;
