import { Text } from "react-native";

const Games = ({ navigation, route }) => {
  return <Text>This is the {route.params.name} page</Text>;
};

export default Games;
