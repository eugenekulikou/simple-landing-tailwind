module.exports = {
    content: ["./src/**/*.html"],
    theme: {
        screen: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px"
        },
        extend: {
            colors: {
                "strong-cyan": 'hsl(171, 66%, 44%)',
                "light-blue": 'hsl(233, 100%, 69%)',
                "grayish-blue": 'hsl(201, 11%, 66%)',
                "dark-grayish-blue": 'hsl(210, 10%, 33%)',
            },
            fontFamily: {
                sans: ['Bai Jamjuree', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}