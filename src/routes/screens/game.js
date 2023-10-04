import { Text } from "react-native";

const Game = ({ navigation, route }) => {
  return <Text>This is the {route.params.name} page</Text>;
};

export default Game;
