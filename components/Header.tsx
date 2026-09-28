import { Text, View, TextInput, Image, StyleSheet } from "react-native"

export function Header({ nomeUsuario }: { nomeUsuario: String }) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.stylecontainerFlex}>
                    <View>
                        <Text style={styles.fontStyle}>  Olá, <Text> {nomeUsuario}</Text> </Text>
                        <Text style={styles.fontStyle}>O que vamos cozinhar?</Text>

                    </View>
                    <View>
                        <Image
                            style={styles.Imagestyle}
                            source={{
                                uri: "https://i.pinimg.com/originals/af/5b/0a/af5b0ad5c4365f17a61893d5994b17d6.jpg"
                            }} />

                    </View>
                </View>
                    <TextInput
                        placeholderTextColor="rgba(0, 0, 0, 0.4)"
                        style={styles.searchBarStyle}
                        placeholder="Buscar receita ou ingrediente" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#18A77B',
        padding: '5%',
        borderRadius: 45

    },
    stylecontainerFlex: {
        flexDirection: 'row',
         gap: 120,
          marginBottom: '5%', 
          marginTop: '9%'
    },
    Imagestyle: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white'
    },
    searchBarStyle: {
        backgroundColor: 'white',
        borderRadius: 26,
        borderWidth: 1.5,
        padding: '4%',
        margin: '1%',
        paddingLeft: '10%',
        borderColor: '#18A77B',
        fontSize: 15
    },
    fontStyle: {
        opacity: 0.9,
        color: 'white',
        fontSize: 20
    },
    Subtitulo: {
        fontSize: 20,
        color: 'white'
    }
})