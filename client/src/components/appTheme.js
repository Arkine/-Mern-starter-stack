const colors = {
    seafoamGreen: '#63FFAC',
    teal: '#ADF5FF',
	grayBrown: '#41463D',
	blueSky: '#3E92CC',
	blueMidnight: '#0D1B2A'
}

export default {
    colors: {
		...colors,
		primary: colors.blueMidnight,
		secondary: colors.teal,
    },
    body: {
        rowWidth: '70rem'
    }
}