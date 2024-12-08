import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";


const UserPage = () =>{

    const {id} = useLocalSearchParams();

    return <View><Text>Hi {id}</Text></View>;
}

export default UserPage;