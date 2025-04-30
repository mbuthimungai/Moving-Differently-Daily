import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "../screens/tabs/product";
import Search from "../screens/tabs/Search";

const Stack = createNativeStackNavigator();

const SearchNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="DefaultSearch"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DefaultSearch" component={Search} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export type SearchNavigationParamList = {
  DefaultSearch: undefined;
  Product: undefined;
};
export default SearchNavigation;
