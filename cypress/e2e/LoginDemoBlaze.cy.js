
const userName= 'automatedUser26@example.com';

const Password = '4r4nd0mp4ssw0rd';



describe('Login to Demo Blaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });
  
  it('logIn test', () => {
    cy.get('#login2').contains('Log in').click();
        cy.get('#logInModalLabel').contains('Log in');
        cy.get('.close');
       cy.get('.form-control-label').contains('Username:');
      cy.get('#loginusername').type(userName,{force:true});
       cy.get('.form-control-label').contains('Password:');
          cy.get('#loginpassword').type(Password);
          cy.get('.btn-primary').contains('Log in').click();


});

it('should find the lowest price in the list', () => {

  let cheapestPrice = Number.POSITIVE_INFINITY;
  let cheapestPriceLink;

  // Find and iterate through the card elements
  cy.get('#tbodyid').scrollIntoView().within(() => {
    cy.get('.col-lg-4 .h-100 .card-block').each(($cardElement) => {
      const $priceElement = $cardElement.find('h5');
      const priceText = $priceElement.text().replace('$', '');
      const priceValue = parseFloat(priceText);

      // Compare and update cheapest price
      if (priceValue < cheapestPrice) {
        cheapestPrice = priceValue;
        cheapestPriceLink = $cardElement.find('a.hrefch');
      }
    }).then(() => {
      // Verify that a valid cheapest price link was found
      expect(cheapestPriceLink).to.exist;

      // Click on the link within the cheapest price card element
      cy.wrap(cheapestPriceLink).click({ force: true });
    });
  });
  
    cy.get('.btn-success ').contains('Add to cart').click();
     cy.intercept('https://api.demoblaze.com/addtocart').as('addToCart');
     cy.wait('@addToCart');
    

});
});


