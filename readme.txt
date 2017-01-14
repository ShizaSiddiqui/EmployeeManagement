Login
Employee List
Employee add/edit form
To do for this app:
	1. Need to redux-ify login form
	2. Need to show several different screens with navigation
	3. Header content changes based on the screens
	4. Each user should have teir own private pool of employees
	5. Need to able to send text message
	6. Need a fullscreen overlay

LoginForm Responsibility
(previous app I made)
flow: Email, passowrd -> attempt login -> loading, error

(what we intend to do: redux based app )
minimize responsibilties for login form
flow: show a form= call action creator when a user types or clicks on a button (like a presenter)

General Redux flow:
User does something (React) -> event flows to Redux (Redux) ->  show new stuff (react)
so, we want record keeping, action, stuff to Redux and React only handles "view"

Interaction between react and redux when user types something
	1. user types something
	2. Call action creater with new text //import connect helper, import action creater, hookit up with connect
	3. action creator returns an action //export const actionName
	4. action sent to all reducers //
	5. each reducer calculaes new app state //create reducer ( two arguments + export by defulat)
	6. state sent to all components //mapsToPropState
	7. componetns rerender with new state (value={this.props.email})
	8. wait for change.. go to 1.


How reducer changes state:
	input : slice of state + Action
	-> reducer
	-> new slice of state
	-> is newState === oldState? // THIS IS KEY!!!  TRIPPLE EQUALS
	->If yes, update, if not don't

	: We need new objects!! otherwise tripple equals says the same!!


Login:
Current State: email, password
Proposed STate: email, password, loading. error, user 

when to update?
	email : whenever user types in email
	password : whenever user types in password
	loading : true when start an auth req, false when completes
	error: defautl to empty string, but when error msg whena failed auth req
	user, defautl null, when auth complets, put user model

Async for actions.. so far only synchronos action creator
call action creator -> action creator runs -> action creator returns action
but when until auth completes.. there is nothing to return? (until ajax returns)


Redux-thunk: action creator for asynchronous operations
flow:
1. action creator called
2. action creator returns a function
3. redux thunk sees that we return a fucntino and calls a dispatch
4. we do our login request
5. wait
6. wait
7. request complete, user logged in
8. .then runs
9. dispatch our action //this is the KEY!!!


Navigation with React-Native (easy for reactJS but react-native does not have)
library: react-native-router-flux
1. uses <Scene> compnent
	ex) 
	<Scene key="login" component={LoginForm} />
	<Scene key="employeeList" component={EmployeeList} />
	<Scene key="employeeCreate" component={EmployeeCreate} />
key <- call Actions.login() to show this screen
component <- show th e component of this form
title <- Make nav bar and give it a title of "Login"
initial <- this is the first screen to show

2. Router


<LEARN>

Sublime: shortcut for finding same word <= Cmd + D
Sublime: how to add template code (short cut)
CreateRNClass (classname)
	import React, { Component } from 'react';
	import { View, Text } from 'react-native';
	class <name> extends Component {
	    render() {
	        return (
	            <View>
					<Text><name></Text>
				</View>
	        );
	    }
	}
	export default <name>;




