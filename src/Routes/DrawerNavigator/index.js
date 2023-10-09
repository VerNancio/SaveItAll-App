import { useState } from "react";
import { View, Text } from "react-native";
import us from "react-native/Libraries/na"
import { useNavigation } from "@react-navigation/native";
import { useDrawerStatus, createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";



const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();

    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>

            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigation;