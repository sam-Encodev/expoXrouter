import { Pressable, Text, View } from "react-native";
import React, { Component } from "react";
import { Link, router } from "expo-router";

export class HomePage extends Component {
  render() {
    return (
      <View>
        <Text>HomePage</Text>
        <Link href="/users/1">Go to user 1</Link>
        <Pressable onPress={() => router.push({
            pathname: "/users/[id]",
            params: { id: 2 },
        })}>
          <Text>Go to user 2</Text>
        </Pressable>
      </View>
    );
  }
}

export default HomePage;
