import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { Header} from './components/Header';
import { CategoryItem } from './components/CategoryItem';

export default function App(){
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <Header nomeUsuario="Alejandro"/>
        <View style={{flexDirection: "row", gap: '2%', padding: '3%', marginTop: '4%'}}>
          <CategoryItem nameCategory='Saladas'/>
          <CategoryItem nameCategory='Massas'/>
          <CategoryItem nameCategory='Carnes'/>
          <CategoryItem nameCategory='Bebidas'/>
          <CategoryItem nameCategory='Doces'/>
          
          </View>
        </SafeAreaView>
    </SafeAreaProvider>
    
    
  )
}
const Styles = StyleSheet.create({
  container:{

}
})