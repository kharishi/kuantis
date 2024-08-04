import { join } from 'path'

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { themeKuantis } from './themeKuantis'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
		  fontFamily: {
		    'sans': ['Lexend', 'sans-serif'],
		  },
		//   colors: {
		//     'current': 'red',
		//     'primary': 'white',
		//     'primary-dark': 'black',
		//     'secondary': 'rgb(241 245 249)',
		//     'secondary-dark': 'rgb(6 78 59 / var(--tw-bg-opacity))',
		//     'secondary-hover': '#d6d9cd'
		//   },
		  flexGrow: {
		    '2': 2
		  },
		  scale: {
		    'max': '5',
		  },
		  backgroundImage: {
		    'pattern-jigshaw': "url('/images/bg-pattern-jigshaw.svg')",
		    'pattern-brick': "url('/images/bg-pattern-brick.svg')",
		    'pattern-call': "url('/images/bg-pattern-call.svg')",
		    'hero': "url('/images/layered-waves-haikei-silver.svg')",
		    'waves': "url('/images/bg-waves-rakit-id.svg')",
		  },
		  backgroundSize: {
		    'auto': 'auto',
		    'cover': 'cover',
		    'contain': 'contain',
		    '120%': '120%',
		    'biggest': '150%',
		  },
		  animation: {
		    vote: 'vote 1s ease-in-out',
		  },
		  keyframes: {
		    vote: {
			 '0%, 100%': {
			   transform: 'rotate(0deg)',
			 },
			 '25%': {
			   transform: 'rotate(-15deg)',
			 },
			 '50%': {
			   transform: 'rotate(15deg)',
			 },
			 '75%': {
			   transform: 'rotate(-5deg)',
			 },
			 '100%': {
			   transform: 'rotate(0deg)',
			 },
		    },
		  },
		  typography: ({ theme }) => {
		    return {
			 DEFAULT: {
			   css: {
				pre: {
				  code: {
				    padding: '0 !important',
				    fontSize: theme('fontSize.base')[0]
				  }
				},
				code: {
				  borderRadius: theme('borderRadius.md'),
				  paddingTop: theme('spacing.1'),
				  paddingBottom: theme('spacing.1'),
				  paddingLeft: theme('spacing.1'),
				  paddingRight: theme('spacing.1'),
				  fontFamily: 'inherit !important',
				  fontWeight: '500 !important',
				  color: theme('colors.slate.900'),
				  backgroundColor: theme('colors.slate.300')
				},
				'code::before': {
				  content: '""'
				},
				'code::after': {
				  content: '""'
				},
				hr: {
				  borderColor: theme('colors.slate.300')
				},
				ul: {
				  marginTop: '0 !important',
				  marginBottom: '0 !important'
				},
				li: {
				  marginTop: '0 !important',
				  marginBottom: '0 !important'
				},
				img: {
				  marginLeft: 'auto',
				  marginRight: 'auto'
				},
				'h1,h2,h3,h4,h5,h6': {
				  a: {
				    color: 'inherit',
				    textDecoration: 'none',
				  },
				}
			   }
			 },
			 sm: {
			   css: {
				pre: {
				  code: {
				    fontSize: theme('fontSize.xs')[0]
				  }
				}
			   }
			 },
			 lg: {
			   css: {
				h1: {
				  fontSize: theme('fontSize.4xl')[0]
				}
			   }
			 },
	 
			 invert: {
			   css: {
				hr: {
				  borderColor: theme('colors.slate.700')
				},
				code: {
				  color: theme('colors.slate.300'),
				  backgroundColor: theme('colors.slate.700')
				},
				'a code': {
				  color: theme('colors.white')
				},
				'pre, pre code': {
				  color: theme('colors.slate.200'),
				  backgroundColor: theme('colors.slate.800')
				}
			   }
			 }
		    }
		  }
		}
	   },
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: false,
					},
					{
						name: 'modern',
						enhancements: true,
					},
					{
						name: 'wintry',
						enhancements: true,
					},
				],
				custom: [
					themeKuantis
				]
			},
		}),
	],
};
