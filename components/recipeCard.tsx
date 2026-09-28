import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'

type DificultFood = 'Fácil' | 'Médio' | 'Difícil'

interface RecipeCardProp {
    nameFood: string,
    categoryFood: string,
    dificultFood:DificultFood,
    onPress: () => void
}
const dificultFoodColors: Record<DificultFood,{backgroundColor: string, color: string}>
={
    Fácil:{
        backgroundColor: '#BDEBD9',
        color: "087F58",
    },
    Médio: {
        backgroundColor: '#FFD08A',
        color: '#8A4B08',
    },
    Difícil:{
        backgroundColor: '#F583CB',
        color: '#9D1740',
    }

    
}

export function RecipeCardProp({nameFood,
     categoryFood,
      dificultFood,
       onPress}: RecipeCardProp){
        const dificultColor = dificultFoodColors [dificultFood]
    return(
        <View style={styles.containerRecipeCard}>
            <View>
                <View style={styles.ImageFood}/>
            </View>
            <View style={styles.infoFood}>
                <Text style={styles.nameFoodStyle}>{nameFood}</Text>
                <Text style={styles.categoryFoodStyle}>{categoryFood}</Text>
                <View style={[styles.dificultFood, {backgroundColor: dificultColor.backgroundColor},

                ]}>
                    <Text>{dificultFood}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                        Ver
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerRecipeCard:{
        flexDirection: "row",
        alignItems: 'center',
        gap: 10,
        backgroundColor: "white",
        borderRadius: 25,
        padding: 16,
        marginBottom: 12

},
 ImageFood:{
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#D4F0E7",
    flexShrink: 0

    },
    infoFood:{
        flex: 1,
        minWidth: 0,
        gap: 3,

    },
    nameFoodStyle:{
        fontSize: 18,
        flexShrink: 1,

    },
    categoryFoodStyle:{
        fontSize: 14,
        fontStyle: "italic",
        marginBottom: 2,

    },   
    buttonContainer:{
        flexShrink: 0,
        alignSelf: 'center',

    },
    buttonStyle:{
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor:'#18A77B',
        borderWidth: 1,
        borderColor: '#18A77B'
    },
    buttonText:{
        textAlign: "center",
        color: "white"
    },
    dificultFood:{
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 50,
    }
})