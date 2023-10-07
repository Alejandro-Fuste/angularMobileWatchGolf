import { View, Button, Text } from "react-native";

const Score = ({ navigation, route }) => {
  return (
    <View>
      <Text>
        This is the <Text>{route.params.name}</Text> page
      </Text>
      <Button
        title="Go to History screen"
        onPress={() => navigation.navigate("History", { name: "History" })}
      />
    </View>
  );
};

export default Score;
