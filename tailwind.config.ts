
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        // Meta Design System Colors
        meta: {
          blue: {
            50: '#F0F8FF',
            100: '#E6F3FF',
            200: '#CCE6FF',
            300: '#99D1FF',
            400: '#66BBFF',
            500: '#1877F2', // Meta Blue
            600: '#1565C0',
            700: '#0D47A1',
            800: '#042C5C',
            900: '#021D3D'
          },
          gray: {
            50: '#FAFBFC',
            100: '#F5F6F7',
            200: '#E4E6EA',
            300: '#CED0D4',
            400: '#BEC3C9',
            500: '#8A8D91',
            600: '#65676B',
            700: '#4B4F56',
            800: '#3A3B3C',
            900: '#242526'
          },
          green: {
            50: '#F0FFF4',
            100: '#E6FFFA',
            400: '#42D392',
            500: '#00A82D'
          },
          purple: {
            50: '#F8F4FF',
            100: '#F0E6FF',
            500: '#8B5FBF'
          }
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
        'meta': '12px', // Meta's signature border radius
        'meta-lg': '16px',
        'meta-xl': '24px'
			},
			fontFamily: {
        'meta': ['SF Pro Display', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'meta-text': ['SF Pro Text', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
			boxShadow: {
        'meta-sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'meta': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'meta-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'meta-xl': '0 16px 40px rgba(0, 0, 0, 0.16)',
        'meta-2xl': '0 24px 64px rgba(0, 0, 0, 0.2)',
        'meta-hover': '0 4px 12px rgba(24, 119, 242, 0.15)'
      },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'meta-float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-8px)'
          }
        },
        'meta-pulse': {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0.8
          }
        },
        'meta-slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'meta-scale': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'meta-float': 'meta-float 4s ease-in-out infinite',
        'meta-pulse': 'meta-pulse 2s ease-in-out infinite',
        'meta-slide-up': 'meta-slide-up 0.6s ease-out',
        'meta-scale': 'meta-scale 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
