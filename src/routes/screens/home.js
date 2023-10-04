import { Button, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Games screen"
        onPress={() => navigation.navigate("Games", { name: "Games" })}
      />
    </View>
  );
};

export default Home;
