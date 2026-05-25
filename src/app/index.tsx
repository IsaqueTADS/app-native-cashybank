import { router } from "expo-router";
import { Button, Text, View } from "react-native";


export default function HomeScreen() {
  return (
   <View className="flex-1 justify-center items-center bg-nyc-bg">
    <Text className="text-green-500">olá Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero totam itaque nesciunt quisquam ullam neque animi sed incidunt, qui earum repellendus sapiente temporibus iste provident, impedit facere tempore, quis atque.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto alias fugiat! Repellendus impedit nam praesentium labore dolor, odit fugiat dicta aliquam esse cumque nihil. Non repellat maxime dicta harum?
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, expedita molestiae alias nihil, ipsum cum sapiente quod assumenda illo quos praesentium similique repellendus consequatur error culpa sed numquam exercitationem neque?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione natus voluptate magni, fugiat debitis a id minus? Incidunt accusantium consequuntur qui? Dicta earum tenetur optio quasi adipisci vel voluptatum.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa facere nam aut rerum, hic dolore qui dolor earum impedit velit quod optio maxime nemo eum deserunt asperiores veritatis corrupti.
    </Text>

    <View>
      <Button title="Home" onPress={() => router.navigate("/home")}/>
      <Button title="Home" onPress={() => router.navigate("/login")}/>
      <Button title="Home" onPress={() => router.navigate("/register")}/>
    </View>
   </View>
  );
}

