import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  darkbg: {
    backgroundColor: "#FFF"
  },
  login__msg: (text = 'none') => ({
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginBottom: 15,
    display: text
  }),
  login__form: {
    width: "100%"
  },
  login__input: {
    backgroundColor: "#fff",
    alignSelf: "center",
    fontSize: 14,
    padding: 7,
    marginBottom: 15,
    width: 320,
    height: 50,
    borderWidth: 1,
    borderRadius: 7
  },
  login__button: {
    padding: 12,
    backgroundColor: "#40e0d0",
    alignSelf: "center",
    borderRadius: 5,
    width: 320,
    height: 50
  },
  login__buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "center",
    color: "#FFFFFF"
  },
  login__forgotPassword: {
    padding: 5,
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  }

});
export { loginStyle };