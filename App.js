import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from './firebase';
import {Container, Item, Label, Input, Button} from 'native-base';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  signUpUser = (email, password) => {
   console.log(this.state.email + " - " + this.state.password);
  }

  loginUser = (email, password) => {

  }




  render(){

    return (
     <Container style={styles.container}>
       <Item floatingLabel>
        <Label>Email</Label>
        <Input 
          autoCapitalize="none"
          autoCorrect={false}
          onChange={(val) => this.setState({email : val})}
        />
       </Item>
       <Item floatingLabel style={{marginTop: 30}}>
        <Label>Password</Label>
        <Input 
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChange={(val) => this.setState({password : val})}
        />
       </Item>
       <Button 
        success 
        rounded 
        style={{marginTop: 30, flex:1}}
        onPress={() => this.loginUser(this.state.email, this.state.password)}
       >
         <Text style={{color: '#fff'}}>Login</Text>
       </Button>
       <Button primary bordered rounded style={{marginTop: 30, flex:1}}
         onPress={() => this.signUpUser(this.state.email, this.state.password)} >
         <Text>Sign Up</Text>
       </Button>
     </Container>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
});

export default App;