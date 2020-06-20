import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import firebase from './firebase';
import {Input} from 'react-native-elements';
import {Button} from 'native-base';
import { Row } from 'native-base';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged( user => {
      if(user != null){
        alert("Login Success");
      }
    });
  }

  signOutUser(){
    firebase.auth().signOut().then(function() {
      alert('User Signed Out');
    }).catch(function(error) {
     alert(error.toString());
    });
  }

  signUpUser = (email, password) => {
    try{
      if(password.length < 6){
        alert("Your password must be atleast 6 characters long or more");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    }catch(error){
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {

    try{
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        
      });
    }
    catch(error){
      console.log(error.toString());
    }

  }




  render(){

    return (
         
        <View style={styles.container}>

          <Input
            placeholder="Email"
            onChangeText={value => this.setState({email : value})}
            label="Email"
          />
          <Input
            placeholder="Password"
            label="Password"
            secureTextEntry={true}
            onChangeText={value => this.setState({password : value})}
          />
          
           <Button
              onPress={() => this.loginUser(this.state.email, this.state.password)}
              success color="#fff" rounded style={styles.btn}>
             <Text style={{color: 'white'}}>Login</Text>
           </Button>
           <Button
              onPress={() => this.signUpUser(this.state.email, this.state.password)}
              primary color="#fff" rounded style={styles.btn}>
             <Text style={{color: 'white'}}>Sign Up</Text>
           </Button>
           <Button
              onPress={() => this.signOutUser()}
              danger color="#fff" rounded style={styles.btn}>
             <Text style={{color: 'white'}}>Sign Out</Text>
           </Button>
          
        </View>
      
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
  btn: {
    margin: 10,
    flex: 1
  }
});

export default App;