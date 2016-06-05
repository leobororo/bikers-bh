module.exports = {
    all: {
        files: [
            // copiar os arquivos da pasta client para a pasta server/public
            {
                expand: true,
                cwd: 'client',
                src: ['**/*.*'],
                dest: 'server/public/'
            }
        ]
    }
};
