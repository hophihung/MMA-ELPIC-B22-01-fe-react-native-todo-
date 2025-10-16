import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // data-type 
  // String
  const [name , setName] = useState<string>('hung');
  // Number
  const [age, setAge] = useState<number>(5);
  // Boolean ,null , undefined
  const [isStudent, setIsStudent] = useState<boolean>(true);
  // Array , object , function
  const [person, setPerson] = useState([{
    name : 'hung',
    age : 5,
  }]);

  return (
    <View style={styles.container}>
      <Text style = {styles.hung}>hẹ hẹ e  </Text>
      <Text >hoc di it nua suc mieng   </Text>
      <StatusBar style="auto" />
      {/* <StatusBar style="auto" /> */}

      <View>
        <Text style={styles.text}>hello {name} </Text>
        <Text style={styles.text}>age : {age} </Text>
        <Text style={styles.text}>isStudent : {isStudent ? 'true' : 'false'} </Text>
        <Text style={styles.text}>person : {JSON.stringify(person)} </Text>

      </View>
    </View>



    
  );
}
//css in js // style component

const styles = StyleSheet.create({
  hung: {
    color : 'red',
    fontSize : 30 , 
  },
  text : {
    fontSize : 25,
    color : 'green',
    marginTop : 20,
  },

 

  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize : 20,color : 'blue',
    paddingTop :20,
    paddingHorizontal : 10,

  },
});
