import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return ( //any style to right will override the left if passed in an array
        <View style={[styles.containerStyle, props.style]}> 
			{props.children}
		</View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
