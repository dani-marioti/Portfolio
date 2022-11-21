import { StyleSheet } from "react-native";

const taskStyle = StyleSheet.create({
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

    fontWeight: "bold",
  },
  person: {
    fontSize: 9,
    marginHorizontal: 2,
    marginVertical: 3,
    alignSelf: "center",
    color: "#8B008B"
  },
  aproved: {
    alignSelf: 'center',
    fontSize: 16,
    padding: 7,
    marginBottom: 15,
    width: 180,
    backgroundColor: '#2F835B',
    height: 40,
    borderRadius: 7,
    elevation: 20,
    color:'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  rejected: {
    alignSelf: "center",
    fontSize: 16,
    padding: 7,
    marginBottom: 15,
    width: 180,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#696969', 
    color:'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }

});
export { taskStyle };