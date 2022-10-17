import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { backgroundColor, borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const BoxScreen = () => {
    return (
        <View style={styles.MainStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
            
        </View>
);
    
};

const styles = StyleSheet.create({
MainStyle: {
    borderColor: 'black',
    borderWidth: 3,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
},
viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'

},
 viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    marginTop: 50
 },
 viewThreeStyle: {
     height: 50,
     width: 50,
     backgroundColor: 'green'

 },
});

export default BoxScreen;