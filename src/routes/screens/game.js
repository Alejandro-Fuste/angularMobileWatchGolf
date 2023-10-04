import { Text } from "react-native";

const Game = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is the {route.params.name} page</Text>;
      <Button
        title="Go to Points screen"
        onPress={() => navigation.navigate("Points", { name: "Points" })}
      />
      <Button
        title="Go to History screen"
        onPress={() => navigation.navigate("History", { name: "History" })}
      />
    </View>
  );
};

export default Game;
