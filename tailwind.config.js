/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        bigTablet: '1000px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        placeholder_border: '#D1D1D1',
        // custom_blue: '#015591',
        blue_base: '#0055A3',
        blue_icon_color: '#146481',
        custom_gray: '#EEEEEE',
        borderGray: '#BFBFBF',
        onHover: '#E1E1E1',
        placeholder_text: '#B6B6B6',
      },
    },
  },
  plugins: [],
}

