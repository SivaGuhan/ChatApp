import React, { useEffect, useState, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Button, Text, ListItem, Avatar } from "@rneui/themed";
import { getAuth } from "firebase/auth";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const db = getFirestore();
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(collection(db, "chats"), id, "messages"),
      (doc) => {
        setChatMessages(
          doc.docChanges().map((change) => ({
            data: change.doc.data(),
          }))
        );
      }
    );
    return unsubscribe;
  });
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[chatMessages.length-1]?.data.photoURL ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{chatName}</ListItem.Title>
        <ListItem.Subtitle
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {chatMessages?.[chatMessages.length-1]?.data.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
});
