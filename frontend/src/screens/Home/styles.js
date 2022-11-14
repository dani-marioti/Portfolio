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
    margin: 5
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    color: "#FFFFFF"
  },
  button2: {
    padding: 6,
    borderRadius: 5,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
  item: {
    backgroundColor: '#ededed',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 7,
    flexDirection: 'row'
  },
  idea: {
    backgroundColor: '#ededed',
    fontWeight: "bold"
  },
  person: {
    fontSize: 9,
    alignSelf: "center",
    color: "FFFFF"
  },

});
export { homeStyle };