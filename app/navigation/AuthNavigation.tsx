import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";
import VerificationCode from "../screens/VerificationCode";
import ConfirmPassword from "../screens/ConfirmPassword";

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
      <stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <stack.Screen name="VerificationCode" component={VerificationCode} />
      <stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
    </stack.Navigator>
  );
};

export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  VerificationCode: undefined;
  ConfirmPassword: undefined;
};

export default AuthNavigation;
