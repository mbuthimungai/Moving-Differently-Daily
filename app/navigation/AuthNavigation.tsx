import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgotPassword from "../screens/auth/ForgotPassword";
import VerificationCode from "../screens/auth/VerificationCode";
import ConfirmPassword from "../screens/auth/ConfirmPassword";

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
