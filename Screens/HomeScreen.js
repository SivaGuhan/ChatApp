import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Button, Text, Avatar } from "@rneui/themed";
import CustomListItem from "../components/CustomListItem";
import { getAuth, signOut } from "firebase/auth";
import { Icon } from "@rneui/themed";
import { doc, getFirestore, onSnapshot, collection } from "firebase/firestore";

const HomeScreen = ({ navigation }) => {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;
  const [chats, setChats] = useState([]);
  const signOutUser = () => {
    signOut(auth)
      .then(() => navigation.replace("Login"))
      .catch((error) => alert(error.message));
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "chats"), (doc) => {
      setChats(
        doc.docChanges().map((change) => ({
          id: change.doc.id,
          data: change.doc.data(),
        }))
      );
    });
    return unsubscribe;
  });
  useEffect(() => {
    navigation.setOptions({
      headerStyle :{backgroundColor:"white"},
      headerTitleStyle :{color:"black"},
      headerTintColor : "black",
      headerLeft: () => (
        <View>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{
                uri: user.photoURL,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 65,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="camera-enhance" size={30}  />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon
              onPress={() => {
                navigation.navigate("AddChat");
              }}
              name="add"
              size={30}
            ></Icon>
          </TouchableOpacity>
        </View>
      ),
    });
  });

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id,
      chatName,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar style="light" />
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
