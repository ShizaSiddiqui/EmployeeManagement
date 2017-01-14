import {
    EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
	console.log('action');
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};
