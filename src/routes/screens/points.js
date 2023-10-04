import { View, Text } from "react-native";

const Points = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is the {route.params.name} page</Text>;
      <Button
        title="Go to Score screen"
        onPress={() => navigation.navigate("Score", { name: "Score" })}
      />
    </View>
  );
};

export default Points;
