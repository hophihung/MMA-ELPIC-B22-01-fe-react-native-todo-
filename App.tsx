import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.hung}>hẹ hẹ e  </Text>
      <Text >hoc di it nua suc mieng   </Text>
      {/* <StatusBar style="auto" /> */}
    </View>



    
  );
}
//css in js // style component

const styles = StyleSheet.create({
  hung: {
    color : 'red',
    fontSize : 30 , 
  },

 

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
