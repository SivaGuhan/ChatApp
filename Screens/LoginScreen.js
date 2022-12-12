import React, { useEffect, useState,useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth=getAuth();
  useLayoutEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        navigation.replace("Home")
      }
    })
    return unsubscribe;
  },[])
  
  const signIn=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((authUser)=>{
      if(authUser){
        navigation.replace("Home")
      }
    })
    .catch((error)=>alert(error.message))
  }
  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "data:image/png;base64,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",
        }}
        style={styles.img}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Login" color="green" containerStyle={styles.button} onPress={signIn}/>
      <Button
        title="Register"
        type="outline"
        titleStyle={{ color: "green" }}
        containerStyle={styles.button}
        onPress={()=>navigation.navigate("Register")}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white"
  },
  img: {
    width: 200,
    height: 200,
  },
  inputContainer:{
    width:300
  },
  button:{
    display:"flex",
    justifyContent:"space-between",
    width:200,
    height:50
  }
});
