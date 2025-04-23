import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dob from "../screens/onboarding/Dob";
import Name from "../screens/onboarding/Name";
import ShareLocation from "../screens/onboarding/ShareLocation";

const stack = createNativeStackNavigator();

const OnboardingNavigation = () => {
  return (
    <stack.Navigator
      initialRouteName="Dob"
      screenOptions={{ headerShown: false }}
    >
      <stack.Screen name="Dob" component={Dob} />
      <stack.Screen name="Name" component={Name} />
      <stack.Screen name="ShareLocation" component={ShareLocation} />
    </stack.Navigator>
  );
};

export type OnboardingParamList = {
  Dob: undefined;
  Name: undefined;
  ShareLocation: undefined;
};

export default OnboardingNavigation;
