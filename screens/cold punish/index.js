
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

const ColdPunishScreen = () => {
    const [typeCar, setTypeCar] = useState(1);
    const [plate, setPlate] = useState('29L132412');
    return (
        <View>
            <Text>Nhập biển số xe</Text>
            <TextInput
                maxLength={9}
                style={styles.plate}
                value={plate}
                onChangeText={plate => setPlate(plate)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    plate: {
        color: "#333",
        backgroundColor: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        borderRadius: 15,
        borderSize: 5,
        height: 80
    }
})
export default ColdPunishScreen