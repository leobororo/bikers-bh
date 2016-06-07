$(function() {

    var CrudUser = function() {

        },
        crudUser;

    /**
     * @method renderUserList
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
    CrudUser.prototype.renderUserList = function() {
        var source = $("#users-template").html(),
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
            $("#content-users").html(html);
            $(".participantes").show();
            $(".participante").hide();
            registryEvents();
        };



        var registryEvents = function() {
            $(".botao-view-update").on('click', CrudUser.prototype.renderUser);
            $(".botao-delete").on('click', CrudUser.prototype.deleteUser);
        };

        CrudUser.prototype.makeAjaxRequest('GET', render, CrudUser.prototype.error, "../api/users");
    };

    /**
     * Método para remover um usuário
     */
    CrudUser.prototype.deleteUser = function() {
        var href = $(this).attr('href');

        /**
         * @callback render
         */
        var render = function(data) {
            $('i[href$=' + href + ']').parent().parent().remove();
        };
        render();
        CrudUser.prototype.makeAjaxRequest('DELETE', render, CrudUser.prototype.error, "../api/users" + "/" + href);
    };


    /**
     * Método para exibir dados do participante
     */
    CrudUser.prototype.renderUser = function() {
        var href = $(this).attr('href');

        var source = $("#user-template").html(),
            template = Handlebars.compile(source),
            html;

        /**
         * @callback render
         */
        var render = function(data) {
            html = template(data);

            $("#content-user").html(html);
            $(".participantes").hide();
            $(".participante").show();

            registryEvents();
        };

        var registryEvents = function(cadastro) {
            $("#botao-atualizar").on('click', CrudUser.prototype.saveUser);
            $("#botao-voltar").on('click', CrudUser.prototype.renderUserList);
        };

        CrudUser.prototype.makeAjaxRequest('GET', render, CrudUser.prototype.error, "../api/users" + "/" + href);
    };

    /**
     * Método para exibir dados do participante
     */
    CrudUser.prototype.renderUserParaInsert = function() {
        var source = $("#user-template").html(),
            template = Handlebars.compile(source),
            html;

        /**
         * @callback render
         */
        var render = function(data) {
            html = template(data);
            $("#content-user").html(html);
            $(".participantes").hide();
            $(".participante").show();

            registryEvents();
        };

        var registryEvents = function() {
            $("#botao-atualizar").on('click', CrudUser.prototype.createUser);
            $("#botao-voltar").on('click', CrudUser.prototype.renderUserList);
        };

        render();
    };

    /**
     * Método para salvar um usuário
     */
    CrudUser.prototype.saveUser = function() {
        var href = $(this).attr('href');

        var dados = {
            _id: href,
            gender: $("#gender").val(),
            email: $("#email").val(),
            name: $("#name").val(),
        };

        CrudUser.prototype.makeAjaxRequest('PUT', CrudUser.prototype.renderUserList, CrudUser.prototype.error, "../api/users", dados);
    };

    /**
     * Método para criar um usuário
     */
    CrudUser.prototype.createUser = function() {
        var href = $(this).attr('href');

        var dados = {
            name: $("#name").val(),
            email: $("#email").val(),
            gender: $("#gender").val()
        };

        CrudUser.prototype.makeAjaxRequest('POST', CrudUser.prototype.renderUserList, CrudUser.prototype.error, "../api/users", dados);
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
    CrudUser.prototype.makeAjaxRequest = function(method, render, error, umaUrl, dadosUsuario) {
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
    CrudUser.prototype.error = function(data) {
        console.dir(data);
    };

    /**
     * Esse método é chamado para inicializar a página e registrar os eventos do menu
     */
    CrudUser.prototype.init = function() {
        var clickHome = function() {
            $(".home").show();
            $(".participantes").hide();
            $(".participante").hide();
            $(".dicas").hide();
        };

        var clickParticipantes = function() {
            CrudUser.prototype.renderUserList();
            $(".home").hide();
            $(".participantes").show();
            $(".participante").hide();
            $(".dicas").hide();
        };

        var clickParticipante = function() {
            CrudUser.prototype.renderUserParaInsert();
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

    crudUser = new CrudUser();

    crudUser.init();

});
