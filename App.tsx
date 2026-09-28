import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { Header} from './components/Header';
import { CategoryItem } from './components/CategoryItem';
import { RecipeCardProp } from './components/recipeCard';

export default function App(){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={Styles.container}>
        <Header nomeUsuario="Alejandro"/>
        <View style={{flexDirection: "row", gap: '2%', padding: '3%', marginTop: '4%'}}>
          <CategoryItem nameCategory='Saladas'/>
          <CategoryItem nameCategory='Massas'/>
          <CategoryItem nameCategory='Carnes'/>
          <CategoryItem nameCategory='Bebidas'/>
          <CategoryItem nameCategory='Doces'/>
          
          </View>
          <View style={{ flexDirection: "row", gap: "15%", marginBottom: "3%"}}>
            <View>
              <Text>Receitas em destaque</Text>
            </View>
            <View>
              <Text style={{ color: "#76C457", fontSize: 15}}> Ver todas
                
              </Text>
            </View>

            </View>
  <RecipeCardProp nameFood='Temaki'
    categoryFood='japonesa'
    dificultFood='Fácil'
    onPress={() => {}}>

    </RecipeCardProp>
            <View>
              <Text style={{
                color: "#76C457",
                textAlign: "center",
                marginBottom: "10%",
              }}
              >
                Sair da conta
              </Text>
            </View>

        </SafeAreaView>
    </SafeAreaProvider>
    
    
  )
}
const Styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:  "#EAF5F0"

}
})