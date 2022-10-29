import { StyleSheet } from "react-native";

const ideaStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkbg: {
        backgroundColor: "#333"
    },
    idea__button: {
        padding: 12,
        backgroundColor: "#40e0d0",
        alignSelf: "center",
        borderRadius: 5,
        width: 320,
        height: 50
    },
    idea__buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: "center",
        color: "#FFFFFF"
    },
    ideaText: {
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: "center"
    },
    idea__input: {
        backgroundColor: "#fff",
        alignSelf: "center",
        fontSize: 14,
        padding: 7,
        marginBottom: 20,
        width: 320,
        height: 50,
        borderRadius: 5
    },
    idea__inputDescription: {
        alignSelf: "center",
        fontSize: 14,
        padding: 7,
        marginBottom: 20,
        width: 320,
        height: 200,
        borderRadius: 5
    },
    idea__form: {
        width: "100%"
    },
    name: {
        height: 100,
        width: 100,
        fontSize: 14,
        padding: 7,
        marginBottom: 20,
        border: 5,
        alignSelf: "center",

    },
    email: {
        height: 100,
        flex: 1,
        fontSize: 14,
        padding: 7,
        marginBottom: 20,
        border: 5,
        alignSelf: "center",

    }

});

export { ideaStyle };