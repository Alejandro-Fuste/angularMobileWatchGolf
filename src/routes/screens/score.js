import { Text } from "react-native";

const Score = ({ navigation, route }) => {
  return <Text>This is the {route.params.name} page</Text>;
};

export default Score;
