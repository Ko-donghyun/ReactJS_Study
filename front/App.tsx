// import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import AuthHomeScreen from './src/screens/AuthHomeScreen';
// import AuthStackNavigator from './src/navigations/stack/AuthStackNavigator';
import RootNavigator from './src/navigations/root/RootNavigator';

function App() {
  // const [name, setName] = useState('');

  // const handleChangeInputLegacy = e => {
  //   setName(e.target.value);
  // };

  // 입력 핸들링
  // const handleChangeInput = (text: string) => {
  //   console.log(text);
  //   setName(text);
  // };

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    // <NavigationContainer>
    //   <SafeAreaView>
    //     <View style={styles.container}>
    //       <Text>텍스트</Text>
    //       <Button
    //         style={styles.button}
    //         title="버튼이름"
    //         onPress={() => console.log('클릭됨!')}
    //       />
    //       <View style={styles.inputContainer}>
    //         <Text>이름2</Text>
    //         <TextInput
    //           style={styles.input}
    //           value={name}
    //           onChangeText={handleChangeInput}
    //         />
    //       </View>
    //     </View>
    //     <View style={{backgroundColor: 'blue'}}>
    //       <Text>텍스트</Text>
    //     </View>
    //   </SafeAreaView>
    // </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // marginTop: 50,
//     // marginHorizontal: '10%',
//     backgroundColor: 'yellow',
//   },
//   button: {
//     // marginTop: 50,
//     margin: 20,
//     backgroundColor: 'green',
//   },
//   input: {
//     flex: 0.81,
//     borderWidth: 2,
//     borderColor: 'black',
//     height: 100,
//     width: 100,
//   },
//   inputContainer: {
//     backgroundColor: 'red',
//     flexDirection: 'row',
//     alignItems: 'center',
//     // justifyContent: 'center',
//     // justifyContent: 'space-ardound',
//     justifyContent: 'space-evenly',
//   },
// });

export default App;

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
