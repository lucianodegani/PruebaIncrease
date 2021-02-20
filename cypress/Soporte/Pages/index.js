
class indexPage {

    constructor(){
        this.searchInputGoogle = '.gLFyf'
        this.searchBuscarBtnGoogle = '.aajZCb > .tfB0Bf > center > .gNO89b'

        this.searchPrimerResultado = ':nth-child(1) > .tF2Cxc > .yuRUbf'

        this.searchListaSugeridaPrimerElemento = ' :nth-child(1) > .jKWzZXdEJWi__suggestions-inner-container > .sbtc > .sbl2 > span'

        this.searchLinkResultadoReal = 'The Books - Patrick Rothfuss'
    

    }

    //cy.contains('The Books - Patrick Rothfuss').click();
    searchPageGoogle = (element) => {
        cy.get(this.searchInputGoogle).type(element);


    }


    searchResultadoReal = (element) => {
    cy.contains(element).click();


}


    clickBtnGoogle = (a) => {
        cy.get(this.searchBuscarBtnGoogle).click();
    }

    clickLinkGooglePrimerResultado = (a) => {
        cy.get(this.searchPrimerResultado).first().click();
    }

    clickLinkGooglePrimerResultadoContains = () => {
        cy.get(this.searchPrimerResultado).first().contains('The Name of the Wind - Patrick Rothfuss');
    }
    
    clickListaGoogleSugerida = () => {
        cy.get(this.searchListaSugeridaPrimerElemento).click();
    }
    
}

export default new indexPage();