import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

interface RestrictedScreenProps {
  setIsAuthenticated: (arg0: boolean) => void;
}

const RestrictedScreen: React.FC<RestrictedScreenProps> = ({
  setIsAuthenticated,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>You are authenticated</Text>

      <TouchableOpacity
        onPress={() => setIsAuthenticated(false)}
        style={styles.btn}
      >
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  btn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0893FC",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    marginTop: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingTop: 50,
    paddingLeft: 15,
    paddingBottom: 20,
  },
});

export default RestrictedScreen;
