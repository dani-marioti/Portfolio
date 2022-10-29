import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkbg: {
    backgroundColor: "#333"
  },
  login__logomarca: {
    marginBottom: 10
  },
  login__msg: (text = 'none') => ({
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginBottom: 15,
    display: text
  }),
  login__form: {
    width: "80%"
  },
  login__input: {
    backgroundColor: "#fff",
    alignSelf: "center",
    fontSize: 14,
    padding: 7,
    marginBottom: 15,
    width: 320,
    height: 50,
    borderRadius: 5
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
    padding: 4,
    alignSelf: "center",
    fontSize: 14,
    color: "#FFFFFF"
  }

});
export { loginStyle };