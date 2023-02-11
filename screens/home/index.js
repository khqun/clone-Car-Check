import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from '../../axios/axiosConfig';

const HomeScreen = ({ navigation }) => {

    return (
        <View
            style={{ display: "flex", flexDirection: "row" }}
        >
            <TouchableOpacity
                style={styles.button}>
                <Icon
                    name="car"
                    size={35}
                    onPress={() => navigation.navigate('Valuation')}
                    style={styles.icon}
                />
                <Text>Phạt nguội</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}>
                <Icon
                    name="money-bill"
                    size={35}
                    onPress={() => navigation.navigate('Cold punish')}
                    style={styles.icon}
                />
                <Text>Định giá xe</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 40,
        marginTop: 50,
        marginLeft: 30,
        borderRadius: 15,
        opacity: 0.5
    },
    icon: {
        textAlign: 'center'
    }
});

export default HomeScreen