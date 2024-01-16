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
		  'blue': '#1fb6ff',
		  'purple': '#7e5bef',
		  'pink': '#ff49db',
		  'orange': '#ff7849',
		  'green': '#13ce66',
		  'yellow': '#ffc82c',
		  'gray-dark': '#273444',
		  'gray': '#8492a6',
		  'gray-light': '#d3dce6',
		},
		fontFamily: {
		  sora: ['Sora', 'sans-serif'],
		  sans: ['Graphik', 'sans-serif']
		},
		extend: {
		  margin: {
			  '5px': '5px',
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