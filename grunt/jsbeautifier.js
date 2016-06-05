module.exports = {
    grunt: {
        src: [
            "Gruntfile.js",
            "grunt/**/*.js"
        ]
    },
    app: {
        src: [
            "!client/components/**/*.*",
            "client/**/*.js"
        ]
    },
    test: {
        src: [
            "tests/**/*.js"
        ]
    }
};
