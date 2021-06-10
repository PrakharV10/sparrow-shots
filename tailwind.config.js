module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				pink: {
					500: '#E74C88',
				},
				blue: {
					50: '#ECEFF4',
				},
				gray: {
					200: '#EFEFEF',
					400: '#8A92A5',
					700: '#36373B',
					800: '#252628',
				},
				white: {
					100: '#FFFFFF',
				},
			},
			screens: {
				xs: '426px',
			},
			height: {
				content: 'max-content',
			},
			fontFamily: {
				logo: ['Kreon', 'serif'],
				body: ['Poppins', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
