const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.{svelte,ts,js,html}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            primary: colors.violet,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
        },
        extend: {
            fontSize: {
                '2xs': '.66rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
