import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ColdPunishScreen from "../screens/cold punish";
import HomeScreen from "../screens/home";
import ValuationScreen from "../screens/valuation";
import Icon from "react-native-vector-icons/FontAwesome5";
const Tab = createBottomTabNavigator();
export default function AppStack() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Trang chủ',
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cold punish"
                    component={ColdPunishScreen}
                    options={{
                        tabBarLabel: 'Phạt nguội',
                        tabBarIcon: ({ color }) => (
                            <Icon name="car" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Valuation"
                    component={ValuationScreen}
                    options={{
                        tabBarLabel: 'Định giá xe',
                        tabBarIcon: ({ color }) => (
                            <Icon name="money-bill" color={color} size={26} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    )
}