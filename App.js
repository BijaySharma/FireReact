import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './firebase';
import {Container, Item, Label, Input, Button} from 'native-base';



export default function App() {
  return (
   <Container style={styles.container}>
     <Item floatingLabel>
      <Label>Email</Label>
      <Input 
        autoCapitalize="none"
        autoCorrect={false}
      />
     </Item>
     <Item floatingLabel style={{marginTop: 30}}>
      <Label>Password</Label>
      <Input 
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
     </Item>
     <Button success rounded style={{marginTop: 30, flex:1}}>
       <Text style={{color: '#fff'}}>Login</Text>
     </Button>
   </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
