/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,md,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
        './components/**/*.{js,ts,jsx,tsx,md,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'eu-blue': '#004494',
                'eu-yellow': '#ffd617',
                'eu-grey': '#404040',
            },
        },
    },
    plugins: [],
}
