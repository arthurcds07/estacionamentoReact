import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    Button,
} from 'react-native';
import { listarVagas } from "../services/api";

export default function VagasScreen() {
    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        fetchVagas();
    }, []);

    const fetchVagas = async () => {
        const result = await listarVagas();
        if (result.success) setVagas(result.vagas);
    };

    const handleOcupar = async (vagaId) => {
        const result = await ocuparVaga(vagaId, user.id);
        Alert.alert(result.message);
        fetchVagas();
      };
    const handleDesocupar = async (vagaId) => {
        const result = await desocuparVaga(vagaId, user.id);
        Alert.alert(result.message);
        fetchVagas();
      };

  

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Image 
                    source={require('../../assets/silhueta-carro.avif')}
                     style={styles.cardImage} />
                <View style={styles.infoContainer}>
                </View>
                <Text style={styles.vagaTitle}>Vaga #{item.id} - {item.preferencial_int ? 'Preferencial' : 'Comum'}</Text>
                <Text>Disponível: {item.disponivel ? 'Sim' : 'Não'}</Text>
                {item.disponivel ? (
                <Button title="Ocupar" onPress={() => handleOcupar(item.id)} />
                ) : (
                <Button title="Desocupar" onPress={() => handleDesocupar(item.id)} />
            )}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Vagas Disponíveis</Text>
            <FlatList
                data={vagas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={4} // Máximo de 4 cards por fileira
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        paddingTop: 30,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2e8bc0',
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 18,
        margin: 8,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        maxWidth: '22%', // Para garantir que os cards fiquem alinhados
    },
    cardContent: {
        alignItems: 'center',
        width: '100%',
    },
    cardImage: {
        width: 70,
        height: 70,
        borderRadius: 12,
        marginBottom: 12,
        backgroundColor: '#e0e0e0',
    },
    infoContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    vagaTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        color: '#333',
    },
    buttonContainer: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#f0f4f8',
        borderRadius: 8,
    },
});