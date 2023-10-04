import { Text, View } from "react-native";

const Games = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is the {route.params.name} page</Text>;
      <Button
        title="Go to Game screen"
        onPress={() => navigation.navigate("Game", { name: "Game" })}
      />
    </View>
  );
};

export default Games;
