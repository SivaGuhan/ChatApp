import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Button, Text, Avatar } from "@rneui/themed";
import CustomListItem from "../components/CustomListItem";
import { getAuth } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  const auth = getAuth();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <Avatar
            rounded
            source={{
              uri: auth.currentUser.photoURL,
            }}
          />
        </View>
      ),
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
