import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    backgroundColor: "#40e0d0",
    justifyContent: 'center',
    borderRadius: 5,
    width: 100,
    height: 30,
    margin: 5,
    // alignSelf: 'flex-end'
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    color: "#FFFFFF"
  },
  button2: {
    padding: 6,
    // alignSelf: "center",
    borderRadius: 5,
    // left: 370,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  }

});
export { homeStyle };