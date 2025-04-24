import { StyleSheet, View, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
