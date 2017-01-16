import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
			<CardSection>
					<Input
						label="Name"
						placeholder="Jane"
						onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
						value={this.props.name}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-5555"
						onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
						value={this.props.phone}
					/>
				</CardSection>

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({prop:'shift', value})}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednsday" value="Wednsday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>
				</View>
        );
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
