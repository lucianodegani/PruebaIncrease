import indexPage from '../../Soporte/Pages/index';

describe ('Test Cases Google Search Increase', function() {
     
    before(function()
    {
        cy.log('Ejecucion de las pruebas googleSearch');
    }
    )

    after(function()
    {
        cy.log('Ejecucion de las pruebas finalizasa');
    }
    )

    beforeEach(function(){
        cy.visit('www.google.com.ar');

    })

    it ('Google Homepage Search seleccion de primer resultado', function(){
        
         indexPage.searchPageGoogle('The name of the wind');
        
        //click en btn de busqueda de google
        indexPage.clickBtnGoogle();
    
        //selecciono el primer resultado de la busqueda
        indexPage.clickLinkGooglePrimerResultado();
        cy.wait (2000)


    }
    )

    it ('Google Homepage Search primer Resultado negativo en caso de no ser el valor solicitado', function(){
        
         indexPage.searchPageGoogle('The name of the wind');
        
        //click en btn de busqueda de google
        indexPage.clickBtnGoogle();
      
        //selecciono el primer resultado de la busqueda y pregunto si tiene el valor solicitado en el test The Name of the Wind - Patrick Rothfuss
        indexPage.clickLinkGooglePrimerResultadoContains();
        
        cy.wait (2000)


    }
    )



    it ('Google Homepage Search Seleccion de lista Sugerida primer valor a la pagina oficial del autor', function(){
               
        indexPage.searchPageGoogle('The name of the w');
      
        cy.wait(2000);
        indexPage.clickListaGoogleSugerida();
       

        //-------------------------------------------------------------------------------------------------------
      
        //selecciono el primer resultado que tenga el nombre del libro y el autor para ir a la pagina principal
        indexPage.searchResultadoReal('The Books - Patrick Rothfuss');

       //cy.get("[home]").click();
       

    }
    )

    it ('Google Homepage Search Seleccion de lista Sugerida primer valor', function(){
               
        indexPage.searchPageGoogle('The name of the w');
      
        cy.wait(2000);
        indexPage.clickListaGoogleSugerida();
       

        //-------------------------------------------------------------------------------------------------------
      
        //selecciono el primer resultado de la busqueda sea o no la pagina solicitada
        indexPage.clickLinkGooglePrimerResultado();
             

    }
    )

}
)
