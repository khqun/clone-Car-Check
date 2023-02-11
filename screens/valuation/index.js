import { View, Button, Text, StyleSheet } from "react-native";
import { listCar, getCarList, predictCar, carPrice } from "../../redux/reducers/valuationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, } from "react";
import RNPickerSelect from "react-native-picker-select";

const ValuationScreen = () => {
    const otherArr = ['fuel', 'model', 'year', 'gearbox'];
    const [yourCar, setYourCar] = useState({ deviceId: '1234' });
    const [pickedCar, setPickedCar] = useState();
    const dispatch = useDispatch();
    const car = useSelector(listCar);
    const price = useSelector(carPrice);
    const onBrandChange = (data) => {
        const fakeCar = car.find(car => {
            return car.brand === data
        });
        setPickedCar(fakeCar);
        fakeCar ? setYourCar({ ...yourCar, brand: fakeCar.brand }) : console.log('no');
        console.log(yourCar);
    }
    const itemsBrand = car.map((car) => (
        {
            label: car.brand,
            value: car.brand
        }
    )
    )
    const other = (list) => {
        if (list) {
            return (
                list.map((comp) => (
                    {
                        label: comp,
                        value: comp
                    }
                ))
            )
        }
    };
    const othersRender = () => {
        if (pickedCar) {
            return otherArr.map((name) => (
                name === "year" ? <View key={name}>
                    <View>
                        <Text>{name}</Text>
                        <RNPickerSelect
                            onValueChange={(value) => setYourCar({ ...yourCar, [name]: parseInt(value) })}
                            items={pickedCar ? other(pickedCar[name]) : []}
                        />
                    </View>
                </View> :
                    <View key={name}>
                        <View>
                            <Text>{name}</Text>
                            <RNPickerSelect
                                onValueChange={(value) => setYourCar({ ...yourCar, [name]: value })}
                                items={pickedCar ? other(pickedCar[name]) : []}
                            />
                        </View>
                    </View>
            ))
        }
    }
    const renderPrice = () => {
        if (price) {
            const realPrice = price.predicted_price * 1000000;
            const convertPrice = realPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            return <Text>{convertPrice} Đồng</Text>
        }
    }
    useEffect(() => {
        getCarList(dispatch);
    })
    return (
        <View style={styles.container}>
            <Text>Chọn hãng xe</Text>
            <RNPickerSelect
                style={{ backgroundColor: '#5BC3F4' }}
                onValueChange={(value) => onBrandChange(value)}
                items={itemsBrand ? itemsBrand : []}
            />
            {othersRender()}
            <Button
                onPress={() => {
                    predictCar(yourCar, dispatch)
                    console.log(price);
                }}
                title="Kiểm tra"
                color="#5BC3F4"
            />
            <Text>Định giá: <Text style={{color:'#5BC3F4'}}>{renderPrice()}</Text></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF'
    }
})

export default ValuationScreen