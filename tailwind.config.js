/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false
    },
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1B97E4',
                lightNavy: '#19467E',
                paleGray: '#E6E8EB'
            },
            boxShadow: {
                top: '0 0 6px 0 rgba(0,22,51,0.2)',
                subHeader: '0 1px 4px #606060;'
            }
        }
    },
    plugins: []
}
