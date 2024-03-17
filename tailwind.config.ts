import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'villa': "url('/image (1).png')",
        'main': "url('/homepage.jpg')",
        'small_main': "url('/homepage_small.png')",
        'host_bg': "url('/mosque-pictures-moroccan-wall-pattern.png')",
      },
      colors: {
        'primary-1': 'var(--primary-1)',
        'primary-2': 'var(--primary-2)',
        'primary-3': 'var(--primary-3)',
        'secondary-3': 'var(--secondary-3)',
        'secondary-4': 'var(--secondary-4)',
        'secondary-5': 'var(--secondary-5)',
        'black': 'var(--black)',
        'white': 'var(--white)',
        'navbg': 'var(--navbg)',

      },
    },
  },
  plugins: [],
}
export default config
