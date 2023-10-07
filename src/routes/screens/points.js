import { Button, View, Text } from "react-native";

const Points = ({ navigation, route }) => {
  return (
    <View>
      <Text>
        This is the <Text>{route.params.name}</Text> page
      </Text>
      <Button
        title="Go to Score screen"
        onPress={() => navigation.navigate("Score", { name: "Score" })}
      />
    </View>
  );
};

export default Points;
