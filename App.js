/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import { render } from 'react-dom';
import nodejs from 'nodejs-mobile-react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Section extends React.Component({children, title}) {


render(){
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.white
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.light 
          },
        ]}>
        {children}
      </Text>
    </View>
  );
      }
};

class App extends React.Component() {

  componentWillMount()
  {
    nodejs.start('main.js');
    console.log("nodejs:", nodejs)
    // nodejs.channel.addListener(
    //   'message',
    //   (msg) => {
    //     alert('From node: ' + msg);
    //   },
    //   this 
    // );
  }

render(){
  return (
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View
          style={{
            backgroundColor:  Colors.black
          }}>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <Button
            title="Message Node"
            onPress={() => nodejs.channel.send('A message!')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
