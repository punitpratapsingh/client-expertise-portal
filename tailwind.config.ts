
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
        // Sci-Fi Dark/Light Professional Theme
        'dark': {
          900: '#0A0B0D', // Deep space black
          800: '#13151A', // Dark charcoal
          700: '#1A1D23', // Gunmetal
          600: '#252A34', // Steel gray
          500: '#374151', // Slate
          400: '#4B5563', // Cool gray
          300: '#6B7280', // Medium gray
          200: '#9CA3AF', // Light gray
          100: '#D1D5DB', // Very light gray
          50: '#F9FAFB'   // Off white
        },
        'neon': {
          blue: '#00D4FF',    // Electric blue
          cyan: '#00FFF0',    // Bright cyan
          purple: '#8B5CF6',  // Electric purple
          pink: '#FF0080',    // Hot pink
          green: '#00FF88',   // Matrix green
          yellow: '#FFD700'   // Electric yellow
        },
        'glow': {
          blue: '#0EA5E9',
          purple: '#8B5CF6',
          green: '#10B981',
          orange: '#F59E0B'
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px'
			},
			fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
			boxShadow: {
        'neon-sm': '0 0 5px rgba(0, 212, 255, 0.3)',
        'neon': '0 0 20px rgba(0, 212, 255, 0.4)',
        'neon-lg': '0 0 40px rgba(0, 212, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.4)',
        'cyber': '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
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
        'neon-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 10px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.5)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'glow': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.5'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite'
			},
      backdropBlur: {
        xs: '2px'
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
