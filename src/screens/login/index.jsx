import React, { useState } from "react";
import { View, StyleSheet, useWindowDimensions, Image } from "react-native";
import CustomInput from "../../components/customInput";
import logo from "../../assets/logo.png";
import CustomButtom from "../../components/customButtom";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [passwword, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState("");

  const { height } = useWindowDimensions();

  const checkUser = text => {
    setUser(text);
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password bad";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase) {
      return "Password bad";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber) {
      return "Password bad";
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength) {
      return "Password bad";
    }

    return null;
  };

  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(passwword);
    if (!checkPassword) {
      navigation.replace("Home");
    } else {
      alert(checkPassword);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.containerInput}>
        <CustomInput
          placeholder="usuario"
          value={user}
          setValue={setUser}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="contraseña"
          value={passwword}
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>
      <CustomButtom onPress={handleLogin} text="Ingresar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 40,
    backgroundColor: "#0ea5e9",
  },
  containerInput: {
    width: "100%",
  },
  logo: {
    width: "70%",
    maxWidth: 250,
    maxHeight: 200,
    borderRadius: 25,
  },
});

export default Login;
