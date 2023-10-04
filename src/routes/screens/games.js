import { Text } from "react-native";

const Games = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default Games;
