import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native"


const HomePage = () =>{
    return (
        <View>
        <Text>Hello</Text>
        <Link href="/users/1" >Go to the user1</Link>
        <Pressable onPress={() => router.push("/users/2")}><Text>Go to user 2</Text></Pressable>
        </View>
)}

export default HomePage;