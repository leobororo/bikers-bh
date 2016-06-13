describe('Bikers-BH', function() {

  it('deve incluir um participante', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8181');
    element(by.id('link-participante')).click();
    element(by.id('name')).sendKeys("Teste");
    element(by.id('email')).sendKeys("teste@test.com.br");
    element(by.id('gender')).sendKeys("Masculino");
    element(by.id('botao-atualizar')).click();
    browser.driver.sleep(1000);

    expect(element.all(by.className("name-class")).last().getText()).toEqual('Teste');
    expect(element.all(by.className("email-class")).last().getText()).toEqual('teste@test.com.br');
    expect(element.all(by.className("gender-class")).last().getText()).toEqual('Masculino');
  });

  it('deve alterar um participante', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8181');
    element(by.id('link-participantes')).click();
    browser.driver.sleep(1000);
    element.all(by.className("botao-view-update")).last().click();
    browser.driver.sleep(1000);
    element(by.id('name')).clear();
    element(by.id('name')).sendKeys("Teste 2");
    element(by.id('email')).clear();
    element(by.id('email')).sendKeys("teste2@test.com.br");
    element(by.id('gender')).clear();
    element(by.id('gender')).sendKeys("Feminino");
    element(by.id('botao-atualizar')).click();
    browser.driver.sleep(1000);

    expect(element.all(by.className("name-class")).last().getText()).toEqual('Teste 2');
    expect(element.all(by.className("email-class")).last().getText()).toEqual('teste2@test.com.br');
    expect(element.all(by.className("gender-class")).last().getText()).toEqual('Feminino');
  });

  it('deve excluir um participante', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8181');
    element(by.id('link-participantes')).click();
    browser.driver.sleep(1000);

    var numero = element.all(by.className("botao-delete")).count();
    expect(numero).toEqual(element.all(by.className("botao-delete")).count());
    element.all(by.className("botao-delete")).last().click();
    browser.driver.sleep(1000);

    expect(numero).not.toEqual(element.all(by.className("botao-delete")).count());
  });

});
