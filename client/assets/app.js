$(function() {

    var CrudParticipante = function() {

        },
        crudParticipante;

    /**
     * @method renderParticipanteList
     *
     * Essse método é responsável por:
     *
     * - selectionar a tag script com o template handlebars, que se encontra em index.html/index-material.html,
     * - compilar o template
     * - declarar o metódo para renderizar o template na template
     * - declarar o metódo para logar possível erro na requisição ajax
     * - chamar o método responsável por requisições ajax
     *
     */
    CrudParticipante.prototype.renderParticipanteList = function() {
        var source = $("#participantes-template").html(),
            template = Handlebars.compile(source),
            html;

        /**
         * @callback render
         */
        var render = function(data) {
            context = {
                usuario: data
            };
            html = template(context);
            $("#content-participantes").html(html);
            $(".participantes").show();
            $(".participante").hide();
            registryEvents();
        };



        var registryEvents = function() {
            $(".botao-view-update").on('click', CrudParticipante.prototype.renderParticipante);
            $(".botao-delete").on('click', CrudParticipante.prototype.deleteParticipante);
        };

        CrudParticipante.prototype.makeAjaxRequest('GET', render, CrudParticipante.prototype.error, "../api/participantes");
    };

    /**
     * Método para remover um participante
     */
    CrudParticipante.prototype.deleteParticipante = function() {
        var href = $(this).attr('href');

        /**
         * @callback render
         */
        var render = function(data) {
            $('i[href$=' + href + ']').parent().parent().remove();
        };
        render();
        CrudParticipante.prototype.makeAjaxRequest('DELETE', render, CrudParticipante.prototype.error, "../api/participantes" + "/" + href);
    };


    /**
     * Método para exibir dados do participante
     */
    CrudParticipante.prototype.renderParticipante = function() {
        var href = $(this).attr('href');

        var source = $("#participante-template").html(),
            template = Handlebars.compile(source),
            html;

        /**
         * @callback render
         */
        var render = function(data) {
            html = template(data);

            $("#content-participante").html(html);
            $(".participantes").hide();
            $(".participante").show();

            registryEvents();
        };

        var registryEvents = function(cadastro) {
            $("#botao-atualizar").on('click', CrudParticipante.prototype.saveParticipante);
            $("#botao-voltar").on('click', CrudParticipante.prototype.renderParticipanteList);
        };

        CrudParticipante.prototype.makeAjaxRequest('GET', render, CrudParticipante.prototype.error, "../api/participantes" + "/" + href);
    };

    /**
     * Método para exibir dados do participante
     */
    CrudParticipante.prototype.renderParticipanteParaInsert = function() {
        var source = $("#participante-template").html(),
            template = Handlebars.compile(source),
            html;

        /**
         * @callback render
         */
        var render = function(data) {
            html = template(data);
            $("#content-participante").html(html);
            $(".participantes").hide();
            $(".participante").show();

            registryEvents();
        };

        var registryEvents = function() {
            $("#botao-atualizar").on('click', CrudParticipante.prototype.createParticipante);
            $("#botao-voltar").on('click', CrudParticipante.prototype.renderParticipanteList);
        };

        render();
    };

    /**
     * Método para salvar um participante
     */
    CrudParticipante.prototype.saveParticipante = function() {
        var href = $(this).attr('href');

        var dados = {
            _id: href,
            gender: $("#gender").val(),
            email: $("#email").val(),
            name: $("#name").val(),
        };

        CrudParticipante.prototype.makeAjaxRequest('PUT', CrudParticipante.prototype.renderParticipanteList, CrudParticipante.prototype.error, "../api/participantes", dados);
    };

    /**
     * Método para criar um participante
     */
    CrudParticipante.prototype.createParticipante = function() {
        var href = $(this).attr('href');

        var dados = {
            name: $("#name").val(),
            email: $("#email").val(),
            gender: $("#gender").val()
        };

        CrudParticipante.prototype.makeAjaxRequest('POST', CrudParticipante.prototype.renderParticipanteList, CrudParticipante.prototype.error, "../api/participantes", dados);
    };


    /**
     * Esse método é utilizado para executar as requisições ajax
     *
     * @param {string} method - 'GET', 'POST', 'DELETE', 'PUT'
     * @param {render} render
     * @param {error} error
     * @param {string} umaUrl - URL
     * @param {string} dadosUsuario - dados json
     *
     */
    CrudParticipante.prototype.makeAjaxRequest = function(method, render, error, umaUrl, dadosUsuario) {
        $.ajax({
            url: umaUrl,
            data: dadosUsuario,
            method: method,
            success: function(dados) {
                render(dados);
            },
            error: function(dados) {
                error(dados);
            }
        });
    };

    /**
     * @callback error
     */
    CrudParticipante.prototype.error = function(data) {
        console.dir(data);
    };

    /**
     * Esse método é chamado para inicializar a página e registrar os eventos do menu
     */
    CrudParticipante.prototype.init = function() {
        var clickHome = function() {
            $(".home").show();
            $(".participantes").hide();
            $(".participante").hide();
            $(".dicas").hide();
        };

        var clickParticipantes = function() {
            CrudParticipante.prototype.renderParticipanteList();
            $(".home").hide();
            $(".participantes").show();
            $(".participante").hide();
            $(".dicas").hide();
        };

        var clickParticipante = function() {
            CrudParticipante.prototype.renderParticipanteParaInsert();
            $(".home").hide();
            $(".participantes").hide();
            $(".participante").show();
            $(".dicas").hide();
        };

        var clickDicas = function() {
            $(".home").hide();
            $(".participantes").hide();
            $(".participante").hide();
            $(".dicas").show();
        };

        $("#link-home").on('click', clickHome);
        $("#link-participantes").on('click', clickParticipantes);
        $("#link-participante").on('click', clickParticipante);
        $("#link-dicas").on('click', clickDicas);

        clickHome();
    };

    crudParticipante = new CrudParticipante();

    crudParticipante.init();

});
