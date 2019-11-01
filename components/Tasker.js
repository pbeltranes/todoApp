import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  SafeAreaView,
  Platform,
  FlatList,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Constants from "expo-constants";
import { MonoText } from "../components/StyledText";

function Item({ task }) {
  console.log(task);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        {task.id}. {task.description}
      </Text>
    </View>
  );
}

export default function Tasker() {
  const [list, setList] = useState([]);
  const [value, onChangeText] = React.useState("");

  const onChange = () => {
    setList([
      ...list,
      { id: list.length, description: value, lista: "principales" }
    ]);
    onChangeText("");
  };
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 40,
            width: 200,
            padding: 10
          }}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="Ingrese Tarea"
        />
        <Button title="Add" onPress={onChange} />
      </View>
      <View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={list}
            renderItem={item => <Item task={item.item} />}
            keyExtractor={item => item.id.toString()}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

Tasker.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  container: {
    flex: 4
  },
  item: {
    backgroundColor: "#f101",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 20
  },
  title: {
    fontSize: 32
  }
});
