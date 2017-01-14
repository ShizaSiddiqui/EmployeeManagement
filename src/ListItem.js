import React, { Component } from 'react';
import { LayoutAnimation,Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

//action creater setup
//1. import everything from actions
//2. import connect from react-redux

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>    
                <Text style={{flex:1}}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)} //this is defined in actions
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => { //ownProps is equal to this.props
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

//3. add connect helper: first arg = mapstatetoprops, second arg = actions
//4. actions is passed as props in list item
export default connect(mapStateToProps, actions)(ListItem);
