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
		container: {
			center: true,
			padding: '2rem',
		},
		colors: {
			'black': '#000',
			'white': '#fff',
			'gray': {
				100: '#f7fafc',
				200: '#edf2f7',
				300: '#e2e8f0',
				400: '#cbd5e0',
				500: '#a0aec0',
				600: '#718096',
				700: '#4a5568',
				800: '#2d3748',
				900: '#1a202c',
			},
		},
		extend: {
		  fontFamily: {
			'body': ['Sora', 'sans-serif'],

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