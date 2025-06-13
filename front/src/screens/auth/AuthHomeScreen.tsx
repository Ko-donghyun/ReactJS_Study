import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Button,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';
// import {  } from 'react-native-gesture-handler';
// import { Text } from 'react-native-reanimated/lib/typescript/Animated';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/logo.png')}
        />
      </View>
      <View
        style={[{margin: 0, backgroundColor: 'white'}, styles.buttonContainer]}>
        {/* <TouchableOpacity
          style={{backgroundColor: 'black'}}
          onPress={() => navigation.navigate(authNavigations.LOGIN)}>
          <Text style={{color: 'white'}}>로그인 화면으로 이동</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: 'black'}}
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}>
          <Text style={{color: 'white'}}>회원가입 화면으로 이동</Text>
        </TouchableOpacity> */}

        {/* <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
        <Button
          title="회원가입 화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        /> */}
        <CustomButton
          label="로그인하기"
          // variant="filled"
          // size="medium"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, margin: 30, alignItems: 'center'},

  imageContainer: {flex: 1.5, width: Dimensions.get('screen').width / 2},

  buttonContainer: {flex: 1, gap: 10},

  image: {
    width: '100%',
    height: '100%',
  },
});

export default AuthHomeScreen;
