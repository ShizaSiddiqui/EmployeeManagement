import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

//need a connect helper to get access to store
class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }); //just a boiler plate

        //Its like setting the data for the adapter
        this.dataSource = ds.cloneWithRows(this.props.libraries); //very important.
    }

    renderRow(library) { //render an item like what we do in a viewholder
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView 
                dataSource={this.dataSource}
                renderRow={this.renderRow} 
            />
        );
    }
}

//state is our state at store 
const mapStateToProps = state => {
    return { libraries: state.libraries }; //sent as props
};

//calls the function connect, when connect is called, it returns another fucntion,
// which is the librarylist
export default connect(mapStateToProps)(LibraryList);
//why is the signature like the above?? <= syntactical stuff for redux
