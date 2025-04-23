import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dob from "../screens/onboarding/Dob";
import Name from "../screens/onboarding/Name";

const stack = createNativeStackNavigator();

const OnboardingNavigation = () => {
  return (
    <stack.Navigator
      initialRouteName="Dob"
      screenOptions={{ headerShown: false }}
    >
      <stack.Screen name="Dob" component={Dob} />
      <stack.Screen name="Name" component={Name} />
    </stack.Navigator>
  );
};

export type OnboardingParamList = {
  Dob: undefined;
  Name: undefined;
};

export default OnboardingNavigation;
