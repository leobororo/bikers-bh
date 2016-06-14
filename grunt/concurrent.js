module.exports = {
    target: {
        tasks: ['nodemon', 'watch'],
        options: {
            logConcurrentOutput: true,
            limit: 5
        }
    },
    test: {
        tasks: ['nodemon', 'watch', 'protractor'],
        options: {
            logConcurrentOutput: true,
            limit: 5
        }
    }
};
