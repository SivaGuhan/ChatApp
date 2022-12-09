import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Button, Text, ListItem, Avatar } from "@rneui/themed";

const CustomListItem = ({id,chatName,enterChat}) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>Youtube Chat</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a sample sub-title.This is a sample sub-title.This is a sample sub-title.
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
