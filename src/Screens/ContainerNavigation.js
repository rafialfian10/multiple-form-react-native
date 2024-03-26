import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

import Form from "./Form";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

const ContainerNavigation = ({ navigation }) => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Form"
          component={Form}
          options={{
            headerShown: true,
            headerMode: "screen",
            headerTitle: "Registrasi klaim",
            headerTitleStyle: {
              fontSize: 16,
              color: "#3567FC",
            },
            headerLeft: () => (
              <TouchableOpacity
                // onPress={() => navigation.goBack()}
                style={{ marginLeft: 8, marginTop: 3 }}
              >
                <AntDesign name="arrowleft" size={20} color="#3567FC" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default ContainerNavigation;
