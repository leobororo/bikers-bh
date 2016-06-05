# bikers-bh
Repositório para o trabalho final da disciplina de Desenvolvimento de Aplicações Web para Dispositivos Móveis.

Para executar a aplicação:

1) git clone https://github.com/leobororo/bikers-bh.git
2) No diretório bikers-bh: npm install
3) No diretório bikers-bh: grunt
4) Acessar a página inicial da aplicação no browser: http://localhost:8181/

Um pouco mais sobre o que foi feito:

 1) Criação do arquivo package.json que será utilizado pelo NPM quando o comando npm install for executado. O arquivo package.json permite informar algumas coisas importantes sobre o projeto como o seu nome, descrição, versão, conjunto de dependências que serão obtidas pelo NPM e especificar scripts que serão executados em etapas do ciclo de vida do install. O NPM vai executar na fase start do seu ciclo o script "node server\bin\server.js" que configura e cria o servidor HTTP para nossa aplicação. Adicionamos o script "grunt build" para ser executado após o install (referenciado pela chave postinstall). A execução do comando grunt build fará com que o arquivo Gruntfile.js seja executado e também especifica que a task build deverá ser executada. 
 2) No arquivo Gruntfile.js utilizamos o require para carregar algumas dependências no grunt que fazem parte de alguns plugins especificados no package.json, são eles:
 	. load-grunt-config: plugin que permite especificar a configuração do grunt através de tarefas
	. load-grunt-tasks: plugin para carregar tarefas especificadas em arquivos
	. time-grunt: plugin para calcular o tempo de execução de cada tarefa
	Então, executamos o comando grunt.task.loadTasks("grunt") para que as tarefas contidas no diretório grunt sejam carregadas. Podemos destacar inicialmente duas tarefas:
	. build: que foi associada ao evento postinstall do ciclo de install do NPM. Esta task associa ao evento build as seguintes tarefas:
		1) checar a qualidade do código através da tarefa jshint do plugin grunt-contrib-jshint
		2) utilizar o plugin grunt-newer para formatar o código fonte utilizando o plugin grunt-jsbeautifier e a configuração fornecida no arquivo jsbeautifier.js
		3) a tarefa copy utiliza o plugin grunt-contrib-copy para copiar arquivos de front-end da pasta client (exceto client/components) para a pasta server/public, este diretório foi configurado o arquivo server\bin\server.js para ser a raiz da nossa aplicação web.
	. default: associa ao evento default as seguintes tarefas:
		1) a tarefa copy utiliza o plugin grunt-contrib-copy para copiar arquivos de front-end da pasta client (exceto client/components) para a pasta server/public
		2) utilizar o plugin grunt-concurrent para executar as seguintes tarefas concorrentemente: nodemon e watch. A tarefa watch utiliza o plugin grunt-contrib-watch para formatar, checar a qualidade do código e copiar arquivos fonte toda vez que estes forem modificados. A tarefa nodemon utiliza o plugin grunt-nodemon para reiniciar o servidor toda vez que houver uma mudança nos arquivos da aplicação.

 
 