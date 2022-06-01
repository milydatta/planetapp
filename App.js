import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import {spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';

export default function App() {
  const [loaded] = useFonts({
    'Antonio-VariableFont': require('./assets/fonts/Antonio-VariableFont_wght.ttf'),
    'LeagueSpartan-VariableFont': require('./assets/fonts/LeagueSpartan-VariableFont_wght.ttf'),
    'OpenSans-VariantFont': require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
  });

  if(!loaded) {
    return <Text>Font is Loading...</Text>;
  }
  
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: typography.bold, fontSize: spacing[5]}}>
        Open up App.js to start working on your app!
        </Text>
      <Text style={{marginTop: spacing[4]}}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
