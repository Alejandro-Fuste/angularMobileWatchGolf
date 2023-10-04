import { Text } from "react-native";

const History = ({ navigation, route }) => {
  return <Text>This is the {route.params.name} page</Text>;
};

export default History;
