import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/register";

const stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Register" component={Register} />
      <stack.Screen name="Login" component={Login} />
    </stack.Navigator>
  );
};

export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
};

export default AuthNavigation;
