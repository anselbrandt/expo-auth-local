import * as LocalAuthentication from "expo-local-authentication";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Auth from "./src/screens/AuthScreen";
import RestrictedScreen from "./src/screens/RestrictedScreen";

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logData, setLogData] = useState<any>();

  // Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  // useEffect(() => {
  //   if (!logData) return;
  //   const sendLog = async (data: any) => {
  //     await fetch("http://laptop.local:5000", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: typeof data === "string" ? data : JSON.stringify(data),
  //     });
  //   };
  //   sendLog(logData);
  // }, [logData]);

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Enter Password",
    });
    auth.then((result) => {
      setIsAuthenticated(result.success);
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      {isAuthenticated ? (
        <RestrictedScreen setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Auth onAuthenticate={onAuthenticate} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
