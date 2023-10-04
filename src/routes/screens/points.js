import { Text } from "react-native";

const Points = ({ navigation, route }) => {
  return <Text>This is the {route.params.name} page</Text>;
};

export default Points;
