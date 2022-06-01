import React from 'react';
import { StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../assets/images/misc/gaming.svg';


const MainScreen = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.heading}>
                    GAMEON
                </Text>
            </View>
            <View style={styles.gamingContainer}>
                <GamingImg
                    width={300}
                    height={300}
                    style={styles.gamingImg}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Let's Begin</Text>
                <MaterialIcons
                    name='arrow-forward-ios'
                    size={30}
                    color="#fff"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#20315f',
        fontFamily: 'Inter-Bold',
    },
    gamingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    gamingImg: {
        transform: [{ rotate: '-15deg' }]
    },
    button: {
        backgroundColor: '#AD40AF',
        padding: 20,
        width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'Roboto-MediumItalic',
    },
});

export default MainScreen;