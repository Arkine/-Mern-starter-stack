const colors = {
    red: 'red',
    blue: 'blue',
    green: 'green',
}

export default {
    colors: {
		...colors,
		primary: colors.blue,
		secondary: colors.green,
    },
    body: {
        rowWidth: '70rem'
    }
}