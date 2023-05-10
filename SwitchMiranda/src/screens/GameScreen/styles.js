import { StyleSheet } from 'react-native'
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 150,
        paddingBottom: 200,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.primary,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20, 
        width: "80%"
    },
    textColor: {
        fontSize: 30,
        color: colors.white,
    },
})

export default styles;
