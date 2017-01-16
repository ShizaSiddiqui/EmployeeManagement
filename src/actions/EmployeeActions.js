import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    console.log('action');
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    //console.log(name, phone, shift);
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        //find a key of '${currentUser.uid}'
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE }); // reset attributes of form
                Actions.employeeList({ type: 'reset' }); //resetting stack
            }); //nav libr employee list but remove back
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift }) //updates an item in the collection
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS }); // reset attributes of form
                Actions.employeeList({ type: 'reset' });
            });
    };
};
