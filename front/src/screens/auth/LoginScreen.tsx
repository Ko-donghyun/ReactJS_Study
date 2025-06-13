import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputField from '../../components/InputField';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateLogin} from '../../utils';

interface LoginScreenProps {}

function LoginScreen({}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };

  const [password, setPassword] = useState('');
  const handleChangePassword = (text: string) => {
    setPassword(text);
  };

  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  // });
  // const handleChangeText = (name: string, text: string) => {
  //   setValues({
  //     ...values,
  //     [name]: text,
  //   });
  // };

  // const [touched, setTouched] = useState({
  //   email: false,
  //   password: false,
  // });
  // const handleBlur = (name: string) => {
  //   setTouched({
  //     ...touched,
  //     [name]: true,
  //   });
  // };

  const login = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  console.log(login.getTextInputProps('email'));

  const handleSubmit = () => {
    console.log('email', email);

    // console.log('values', values);
    console.log('values', login.values);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>로그인 스크린</Text>
        <InputField
          placeholder="이메일"
          // error={'이메일을 입력하세요'}
          error={login.errors.email}
          // touched={touched.email}
          touched={login.touched.email}
          inputMode="email"
          // value={email}
          // onChangeText={handleChangeEmail}

          {...login.getTextInputProps('email')}
          // value={values.email}
          // onChangeText={text => handleChangeText('email', text)}
          // onBlur={() => handleBlur('email')}
        />
        <InputField
          placeholder="비밀번호"
          // error={'비밀번호를 입력하세요'}
          error={login.errors.password}
          // touched={touched.password}
          touched={login.touched.password}
          // inputMode="numeric"
          secureTextEntry
          // value={password}
          // onChangeText={handleChangePassword}

          {...login.getTextInputProps('password')}
          // value={values.password}
          // onChangeText={text => handleChangeText('password', text)}
          // onBlur={() => handleBlur('password')}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}></CustomButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, margin: 30},
  inputContainer: {gap: 20, marginBottom: 30},
});

export default LoginScreen;
