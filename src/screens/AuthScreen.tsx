import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface AuthProps {
  onAuthenticate: () => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthenticate }) => {
  return (
    <View>
      <Text style={styles.title}>Local Auth</Text>

      <TouchableOpacity onPress={onAuthenticate} style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#0893FC",
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 30,
    fontWeight: "400",
    marginVertical: 30,
    textAlign: "center",
  },
});

export default Auth;
