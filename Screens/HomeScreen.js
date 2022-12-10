import React, { useLayoutEffect, useEffect } from "react";
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

const HomeScreen = ({ navigation }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const signOutUser=()=>{
    signOut(auth)
    .then(()=> navigation.replace("Login"))
    .catch((error)=> alert(error.message))
  }
  useEffect(() => {
    navigation.setOptions({
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
      headerRight:()=>(
        <View style={{flexDirection:"row", justifyContent:"space-between", width:55}}>
            <TouchableOpacity activeOpacity={0.5}>
                <Icon name="rowing" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
                <Icon name="rowing" size={24} color="white"></Icon>
            </TouchableOpacity>
        </View>
      )
    });
  },);
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
