module.exports = {
    target: {
        tasks: ['nodemon', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    },
    test: {
        tasks: ['nodemon', 'watch', 'protractor'],
        options: {
            logConcurrentOutput: true
        }
    }
};
