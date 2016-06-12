# Bikers BH
Repositório para o trabalho final da disciplina de Desenvolvimento de Aplicações Web para Dispositivos Móveis.

## Dependências

1) Instalação do node (de preferência uma versão estável)

2) Instalação do MongoDB

3) Criar uma instância do MongoDB (executar mongod.exe)

## Para executar a aplicação:

1) git clone https://github.com/leobororo/bikers-bh.git

2) No diretório bikers-bh: npm install

3) No diretório bikers-bh: grunt

4) Acessar a página inicial da aplicação no browser: http://localhost:8181/

## Um pouco mais sobre o que foi feito:

 1) Criação do arquivo package.json: será utilizado como arquivo de configuração para o comando npm install. Este arquivo permite especificar algumas coisas importantes sobre o projeto como o seu nome, descrição, versão, dependências, que serão obtidas pelo NPM, e scripts que serão executados em em determinadas fases do target install do NPM.

 2) Configuramos o NPM para executar na fase start o script "node server\bin\server.js". Este script instancia o servidor HTTP e o configura como servidor HTTP da nossa aplicação.

 3) Configuramos o NPM para executar na fase postinstall o script "grunt build". A execução do comando "grunt build" fará com que o arquivo Gruntfile.js seja utilizado como arquivo de configuração do grunt e também especifica que a task build deverá ser executada.

 4) No arquivo Gruntfile.js utilizamos o carregador de módulos "require" para carregar algumas dependências da nossa configurção do grunt:

   	. load-grunt-config: plugin que permite especificar configurações do grunt através de tarefas

  	. load-grunt-tasks: plugin para carregar tarefas especificadas em arquivos

  	. time-grunt: plugin para calcular o tempo de execução de cada tarefa

 Depois utilizamos o comando grunt.task.loadTasks("grunt") para que as tarefas contidas no diretório grunt sejam carregadas.

 5) A tarefa do arquivo build.js que será executada na fase postinstall do NPM associará as seguintes tarefas à fase "build" do NPM:

		a) tarefa do arquivo jshint.js que será executada pelo plugin grunt-contrib-jshint. Este plugin permite checar a qualidade do código fonte de caminho especificado no arquivo jshint.js

		b) tarefa do arquivo jsbeautifier.js que será executada pelos plugins grunt-newer e grunt-jsbeautifier. Estes plugins permitem a formatação do código fonte de caminho especificado no arquivo jsbeautifier.js

		c) tarefa do arquivo copy.js que será executada pelo plugin grunt-contrib-copy. Este plugin permite a cópia de código fonte da pasta client para a pasta server/public, este diretório foi configurado durante a execução do script "node server\bin\server.js" para ser a raiz do front-end da  nossa aplicação web responsiva.

	6) Configuramos um script para ser executado quando o comando "grunt" for executado. Este comando faz com que o grunt procure por um arquivo chamado default.js. Configuramos neste arquivo:

		a) tarefa do arquivo copy.js citada no item 5) c

		b) tarefa do arquivo concurrent.js que será executada pelo plugin grunt-concurrent. Este plugin permitirá executar concorrentemente as seguintes tarefas dos seguintes arquivos : nodemon.js e watch.js. A tarefa do arquivo nodemon.js será executada pelo plugin grunt-nodemon que reiniciará o servidor toda vez que houver uma mudança em arquivos da aplicação. tarefa watch.js será executada pelo plugin grunt-contrib-watch que vai executar as tarefas dos arquivos jshint.js, jsbeautifier.js e copy.js.

  7) Acrescentamos mais um script para ser executado na fase postinstall do NPM, o script "bower install"

  8) A execução do script "bower install" utilizará o arquivo bower.json como arquivo de configuração. No arquivo bower.json estão especificadas quais são as dependências de front-end que precisamos para nossa aplicação

  9) Acrescentamos ao arquivo bower.json as seguintes dependências: JQuery, Handlebars e Fontawesome.

  10) Inclui uma API de backend para manter o cadastro de participantes da aplicação. Para isso foi necessário criar o módulo server/aplicacao_backend.js e carregá-lo durante a execução do script server\bin\server.js. Este módulo utiliza o plugin express para configurar o acesso à API do backend e carrega o módulo server/config/mongo.js que configura a conexão desta API com a instância do MongoDB em execução no momento em que a aplicação estiver também em execução.

  11) Inclusão das seguintes dependências no arquivo package.json: grunt-karma, karma, karma-jasmine, karma-phantomjs-launcher, karma-htmlfile-reporter, phantomjs-prebuilt, phantomjs. Configuramos o karma através da criação do arquivo karma.conf.js que define dentre outras coisas que o browser a ser utilizado nos testes é o PhantomJS e que deverá ser gerado o arquivo HTML units.html com o resultado da execução de nossos testes.

  12) Criação de uma tarefa karma.js com informações sobre os arquivos de deverão ser utilizados para execução dos testes.
