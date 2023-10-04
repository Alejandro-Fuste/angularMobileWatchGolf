import { Button, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Games screen"
        onPress={() => navigation.navigate("Games", { name: "Games" })}
      />

      <Button
        title="Go to History screen"
        onPress={() => navigation.navigate("History", { name: "History" })}
      />
    </View>
  );
};

export default Home;
