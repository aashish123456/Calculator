// Imports: Dependencies
import React, { Component } from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native';
import { connect } from 'react-redux';
// Screen Dimensions
const { height, width } = Dimensions.get('window');

let initial = 0
let final = 0
let array = []
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initialNumber:0,
            finalNumber:0
        }
    }
    render(){
        return(
           
            <SafeAreaView style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20}}>
              <TextInput style={styles.textInput} keyboardType={'numeric'} onChangeText={(text)=>text?array.unshift(Number(text)):'' }/>
             </View>
            <Text style={styles.counterText}>{this.props.counter}</Text>
             <View style={styles.counterContainer}>
             <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
            <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={this.props.reduxDecreaseCounter}>
            <Text style={styles.buttonText}>-</Text>
         
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.reduxMultiplyCounter}>
            <Text style={styles.buttonText}>*</Text>
         
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.reduxDevideCounter}>
            <Text style={styles.buttonText}>/</Text>
         
            </TouchableOpacity>

            </View>
          </SafeAreaView>
          )
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
      backgroundColor:'white',
      height:50,
      width:'80%',
      color:'black',
      borderWidth:1,
      borderRadius:5,
      borderColor:'lightgray'
    }
  });
  

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    console.log('State:');
    // Redux Store --> Component
    return {
      counter: state.counter.counter,
    };
  };

  // Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
  const mapDispatchToProps = (dispatch) => {
    // Action
    return {
      // Increase Counter
      reduxIncreaseCounter: () => dispatch({
        type: 'Addition',
        value: 10,
        initialNumber:array,
        finalNumber:Number(final)
      }),
      // Decrease Counter
      reduxDecreaseCounter: () => dispatch({
        type: 'Substraction',
        value: 1,
        initialNumber:array,
        finalNumber:Number(final)
      }),
        // Decrease Counter
        reduxMultiplyCounter: () => dispatch({
            type: 'Multiply',
            value: 1,
            initialNumber:array,
            finalNumber:Number(final)
          }),
          reduxDevideCounter: () => dispatch({
            type: 'Divide',
            value: 1,
            initialNumber:array,
            finalNumber:Number(final)
          }),
    };
    
  };
  // Exports
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);