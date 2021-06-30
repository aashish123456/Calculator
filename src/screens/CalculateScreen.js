import React, { useState, useCallback, useEffect } from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

//import redux files
import { useDispatch, useSelector } from 'react-redux';
import { calculation } from '../redux/action/actioncalculation'
import { ADDITION, CLEAR, SUBSTRACTION, MULTIPLY, DIVIDE } from '../redux/types'

// Screen Dimensions
const { height, width } = Dimensions.get('window');
let initial = 0
let final = 0
let array = []

export default function CalculateScreen(props) {
    const dispatch = useDispatch();
    const calculated_value = useSelector(state => state.counter.counter)
    const [input, setinput] = useState('')

    //dispatch to reducer
    function sendData(data) {
        console.log(input, 'input')
        input ? array.unshift(Number(input)) : ''
        dispatch(calculation(data, array))
        setinput('')
    }

    function changeText(e) {
        setinput(e)

    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                <TextInput style={styles.textInput} keyboardType={'numeric'} value={input} onChangeText={(e) => changeText(e)} />
            </View>
            <Text style={styles.counterText}>{calculated_value}</Text>
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => { sendData(ADDITION) }}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { sendData(SUBSTRACTION) }}>
                    <Text style={styles.buttonText}>-</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => { sendData(MULTIPLY) }}>
                    <Text style={styles.buttonText}>*</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => { sendData(DIVIDE) }}>
                    <Text style={styles.buttonText}>/</Text>

                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={() => ClearData()}>
                <Text style={styles.buttonText}>CLEAR</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
    function ClearData() {
        setinput('')
        array = []
        dispatch(calculation(CLEAR, array))


    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterTitle: {
        fontFamily: 'System',
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
    },
    counterText: {
        fontFamily: 'System',
        fontSize: 36,
        fontWeight: '400',
        color: '#000',
    },
    buttonText: {
        fontFamily: 'System',
        fontSize: 50,
        fontWeight: '300',
        color: '#007AFF',
        marginLeft: 40,
        marginRight: 40,
    },
    textInput: {
        backgroundColor: 'white',
        height: 50,
        width: '80%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgray'
    }
});
