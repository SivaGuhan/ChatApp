import { Button, Icon, Input } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");
  const db = getFirestore();
  const createChat = async () => {
    try{
        await addDoc(collection(db, "chats"), {
            chatName:input,
          });        
        navigation.goBack();
    }
    catch(e){
        alert(e.message);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
    });
  });
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
      <Input
        placeholder="Enter a Chat Name"
        autofocus
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={<Icon name="chat-bubble-outline" size={30} color="black" />}
        onSubmitEditing={createChat}
      />
      <Button onPress={createChat} title="Create a new Chat" color="green" />
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:30,
        height:"100%"
    }
});
