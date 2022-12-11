import { Avatar, Icon, Text } from "@rneui/themed";
import React, { useLayoutEffect, useState } from "react";
import {
    Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginLeft: 10,
              fontWeight: "700",
            }}
          >
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="videocam" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="call" size={30} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const sendMessage=()=>{
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView></ScrollView>
          <View style={styles.footer}>
            <TextInput
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Message"
              style={styles.textInput}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
            <Icon name="send" size={27}/>
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  footer: {
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    padding:15
  },
  textInput:{
    bottom:0,
    height:40,
    flex:1,
    marginRight:15,
    backgroundColor:"#ECECEC",
    padding:10,
    color:"grey",
    borderRadius:30
  }
});
