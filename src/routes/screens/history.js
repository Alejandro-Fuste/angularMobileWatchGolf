import { Button, Text, View } from "react-native";

const History = ({ navigation, route }) => {
  return (
    <View>
      <Text>
        This is the <Text>{route.params.name}</Text> page
      </Text>
      <Button
        title="Go to Games screen"
        onPress={() => navigation.navigate("Games", { name: "Games" })}
      />
    </View>
  );
};

export default History;
