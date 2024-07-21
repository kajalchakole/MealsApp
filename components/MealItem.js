import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View, Platform } from "react-native";
import MealDetails from "./MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            onPress={selectMealItemHandler}>
                <View>
                    <View>
                    <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    }
});