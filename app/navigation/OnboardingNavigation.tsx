import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dob from "../screens/onboarding/Dob";
import Name from "../screens/onboarding/Name";
import ShareLocation from "../screens/onboarding/ShareLocation";
import Phone from "../screens/onboarding/Phone";
import Zipcode from "../screens/onboarding/Zipcode";

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
      <stack.Screen name="Phone" component={Phone} />
      <stack.Screen name="Zipcode" component={Zipcode} />
    </stack.Navigator>
  );
};

export type OnboardingParamList = {
  Dob: undefined;
  Name: undefined;
  ShareLocation: undefined;
  Phone: undefined;
  Zipcode: undefined;
};

export default OnboardingNavigation;
