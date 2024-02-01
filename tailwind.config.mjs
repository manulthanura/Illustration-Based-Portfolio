/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		  sm: '480px',
		  md: '768px',
		  lg: '976px',
		  xl: '1440px',
		},
		colors: {
			'black': '#000',
			'white': '#fff',
			'zinc': {
				100: '#F8F8F8',
				200: '#F0F0F0',
				300: '#E8E8E8',
				400: '#D8D8D8',
				500: '#C8C8C8',
				600: '#B0B0B0',
				700: '#787878',
				800: '#505050',
				900: '#383838',
			}
		},
		extend: {
		  fontFamily: {
			'Sora': ['Sora']
		  },
		  margin: {
			  '4px': '4px',
		  },
		  spacing: {
			'128': '32rem',
			'144': '36rem',
		  },
		  borderRadius: {
			'4xl': '2rem',
		  }
		}
	  },
	plugins: [],
}