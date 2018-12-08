const colors = {
    seafoamGreen: '#63FFAC',
    teal: '#ADF5FF',
	grayBrown: '#41463D',
	blueSky: '#3E92CC',
	blueMidnight: '#0D1B2A',
	red: '#b70606',
	gray: '#CCC',
}

export default {
    colors: {
		...colors,
		primary: colors.blueMidnight,
		hover: colors.blueSky,
		secondary: colors.teal,
		error: colors.red,
    },
    body: {
        rowWidth: '62rem'
    }
}