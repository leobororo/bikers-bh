module.exports = {
    grunt: {
        src: [
            "Gruntfile.js",
            "grunt/**/*.js"
        ]
    },
    app: {
        src: [
            "client/**/*.js",
            "!client/assets/components/**/*.*"
        ]
    },
    test: {
        src: [
            "tests/**/*.js"
        ]
    }
};
