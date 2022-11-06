import { StyleSheet } from "react-native";

const ideaStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 7
    },
    darkbg: {
        backgroundColor: "#FFFF"
    },
    idea__button: {
        padding: 12,
        backgroundColor: "#40e0d0",
        alignSelf: "center",
        width: 367,
        height: 50,
        borderRadius: 7
    },
    idea__buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: "center",
        color: "#FFFFFF"
    },
    ideaText: {
        fontWeight: "bold",
        fontSize: 30,
        alignSelf: "center"
    },
    idea__input: {
        
        alignSelf: "center",
        fontSize: 14,
        padding: 7,
        marginBottom: 20,
        width: 367,
        height: 50,
        fontWeight: "bold",
        backgroundColor: '#ededed',
        borderRadius: 7
    },
    idea__inputDescription: {
        alignSelf: "center",
        fontSize: 14,
        padding: 7,
        marginBottom: 20,
        width: 367,
        height: 200,
        borderRadius: 7,
        fontWeight: "bold",
        backgroundColor: '#ededed'
    },
    idea__form: {
        width: "80%"
    },
    name: {
        alignSelf: "center",
        fontSize: 14,
        padding: 7,
        marginBottom: 20,
        width: 180,
        height: 50,
        fontWeight: "bold",
        backgroundColor: '#ededed',
        borderRadius: 7

    },
    email: {
        alignSelf: "center",
        fontSize: 14,
        padding: 7,
        marginBottom: 20,
        width: 180,
        height: 50,
        fontWeight: "bold",
        backgroundColor: '#ededed',
        borderRadius: 7
    },
    Image:{
        width:50,
        height:50
    }

});

export { ideaStyle };