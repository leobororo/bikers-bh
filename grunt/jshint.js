module.exports = {
    options: {
        jshintrc: ".jshintrc",
        reporter: require("jshint-stylish")
    },
    common: {
        src: [
            "Gruntfile.js",
            "grunt/**/*.js"
        ]
    },
    app: {
        src: [
            "client/**/*.js",
            "!client/assets/components/**"
        ]
    },
    test: {
        src: [
            "tests/**/*.js"
        ]
    }

};
