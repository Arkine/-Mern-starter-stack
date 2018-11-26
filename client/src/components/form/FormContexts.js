import React from 'react';

const ValuesContext = React.createContext({});
const ErrorsContext = React.createContext({});
const SetValueContext = React.createContext(() => {});


export {
	ValuesContext,
	ErrorsContext,
	SetValueContext
}