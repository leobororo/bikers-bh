module.exports = {
	//copiar arquivos modificados na pasta client
    copy: {
        files: [
            "client/**/*.*"
        ],
        tasks: ["copy"]
    },
	//ferramenta JSHint para verificar potenciais problemas nos códigos javascript
    gruntFiles: {
        files: [
            "grunt/**/*.js",
            "Gruntfile.js"
        ],
        tasks: ["jshint"]
    },
    js: {
        files: [
            "!client/components/**/*.js",
            "client/**/*.js"

        ],
        tasks: ["jshint"]
    }
};
