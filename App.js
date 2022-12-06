import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import RestaurantScreen from './screen/RestaurantScreen';
import { store } from './store'
import { Provider } from 'react-redux'
import BasketScreen from './screen/BasketScreen';
import OrderPreparingScreen from './screen/OrderPreparingScreen';
import DeliveryScreen from './screen/DeliveryScreen';

const Stack = createNativeStackNavigator();

//Icons used in Project - https://reactnativeelements.com/docs/next/components/icon

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{headerShown: false,}} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation:'modal' ,headerShown: false,}} />
            <Stack.Screen name="OrderPreparing" component={OrderPreparingScreen} options={{headerShown: false,}} />
            <Stack.Screen name="Delivery" component={DeliveryScreen} options={{headerShown: false,}} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

