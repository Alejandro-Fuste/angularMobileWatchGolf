import { Text } from "react-native";

const History = ({ navigation, route }) => {
  <Button
    title="Go to Home screen"
    onPress={() => navigation.navigate("Home", { name: "Home" })}
  />;
};

export default History;
