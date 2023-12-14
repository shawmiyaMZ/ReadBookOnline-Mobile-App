import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./navigation/screens/HomeScreen";
import DetailScreen from "./navigation/screens/DetailScreen";
import BookScreen from "./navigation/screens/HomeScreen";



function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image style={styles.mypic} source={require('./assets/3.png')}/>
                <Text style={styles.mytext1}>Books Store</Text>
                <Text style={styles.mytext2}>We help you to find all types of Books</Text>
                <Text style={styles.mytext3}>Use the app and get the mximum use</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText} >LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Sign Up')}>
                <Text style={styles.loginText} >SIGN UP</Text>
        </TouchableOpacity>
    </View>
  );
}

function LoginScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
 
    return (
        <View style={styles.cont}>
        <Image style={styles.image} source={require("./assets/3.png")} />
   
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#c0c0c0"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#c0c0c0"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
        <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={() => navigation.navigate('Forgot Password')}>Forgot Password?</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={styles.logBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.cont}>
      <Image style={styles.image} source={require("./assets/3.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#c0c0c0"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#c0c0c0"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#c0c0c0"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.SignBtn}>
        <Text style={styles.signText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    );
  }

function ForgetScreen() {
    const [email, setEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <View style={styles.contain}>
      <Image style={styles.image} source={require("./assets/3.png")} />
      <Text style={styles.txt}>Set Password</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#c0c0c0"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="New Password."
          placeholderTextColor="#c0c0c0"
          secureTextEntry={true}
          onChangeText={(newpassword) => setNewPassword(newpassword)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#c0c0c0"
          secureTextEntry={true}
          onChangeText={(password) => setNewPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.SignBtn}>
        <Text style={styles.signText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
    );
  }

  const Stack = createNativeStackNavigator();

    function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{title: 'LOGIN HERE', 
            headerStyle: {
                backgroundColor: '#ff1493' }, 
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                
            }}/>
            <Stack.Screen name="Sign Up" component={RegisterScreen} options={{title: 'SIGN UP HERE', 
            headerStyle: {
                backgroundColor: '#ff1493' }, 
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                
            }}/>
            <Stack.Screen name="Forgot Password" component={ForgetScreen} options={{title: '', 
            headerStyle: {
                backgroundColor: '#ff1493' }, 
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },         
            }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Find" component={BookScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
    }

      function Tab() {
        return (
          <MainContainer/>
        );
      }

export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fddde6', 
    },
  
    mypic: {
      marginTop: 90,
      marginLeft: 85,
      width: 180,
      height: 180,
    },
  
    mytext1: {
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'serif',
      paddingLeft: 80,
      paddingTop: 30,
    },
  
    mytext2: {
      paddingLeft: 50,
      paddingTop: 30,
      color: '#fc8eac'
    },
  
    mytext3: {
      paddingLeft: 50,
      color: '#fc8eac'
    },
    
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#ff1493",
      marginLeft: 35
    },
  
    loginText: {
      color: '#fff',
      fontWeight: 'bold'
    },

    cont: {
        flex: 1,
        backgroundColor: "#fddde6",
        alignItems: "center",
        justifyContent: "center",
      },
     
      image: {
        marginBottom: 40,
        width:180,
        height:180,
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
     
      forgot_button: {
        marginTop: 10,
        height: 30,
        marginBottom: 20,
        color: '#ff1493',
        marginLeft: 10
      },
     
      logBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#ff1493",
      },
      loginText: {
        color: '#fff',
        fontWeight: 'bold'
      },
     
      inputView: {
        backgroundColor: "#fff",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        fontSize: 10,
        alignItems: "center",
      },
     
      SignBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ff1493",
      },
    
      signText: {
        color: '#fff',
        fontWeight: 'bold'
      },
      
      contain: {
        flex: 1,
        backgroundColor: "#fddde6",
        alignItems: "center",
        justifyContent: "center",
      },
     
      image: {
        marginBottom: 20,
        width:180,
        height:180,
      },
     
      txt: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
      },
    
      inputView: {
        backgroundColor: "#fff",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        fontSize: 10,
        alignItems: "center",
      },
     
      TextInput: {
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
     
      SignBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ff1493",
      },
    
      signText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
      }
    
  
  });




