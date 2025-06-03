
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
        // Modern Light Professional Theme
        'light': {
          50: '#F8FAFC',   // Very light gray
          100: '#F1F5F9',  // Light gray
          200: '#E2E8F0',  // Light gray
          300: '#CBD5E1',  // Medium gray
          400: '#94A3B8',  // Slate gray
          500: '#64748B',  // Dark slate
          600: '#475569',  // Darker slate
          700: '#334155',  // Very dark slate
          800: '#1E293B',  // Near black
          900: '#0F172A'   // Almost black
        },
        'blue': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',  // Main blue
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'
        },
        'purple': {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',  // Main purple
          700: '#7C3AED',
          800: '#6D28D9',
          900: '#581C87'
        },
        'emerald': {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',  // Main green
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
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
        'modern-sm': '0 1px 3px rgba(59, 130, 246, 0.1)',
        'modern': '0 4px 20px rgba(59, 130, 246, 0.15)',
        'modern-lg': '0 8px 40px rgba(59, 130, 246, 0.2)',
        'purple-glow': '0 4px 20px rgba(139, 92, 246, 0.15)',
        'green-glow': '0 4px 20px rgba(16, 185, 129, 0.15)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)'
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
        'modern-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
          },
          '50%': {
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)'
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
        'modern-pulse': 'modern-pulse 2s ease-in-out infinite',
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
