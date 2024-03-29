describe('emailExist.cy.ts', () => {
  it('shows an error message when login fails', () => {
    function getRandomNumber() {
      return Math.floor(Math.random() * 1000000000);
    }

    cy.visit('http://localhost:4200/home');
    cy.get('button').contains('REGISTER').click();
    cy.get('input[placeholder="Username"]').type('TestUsername'+getRandomNumber().toString());
    cy.get('input[placeholder="Email"]').type('taken@email.com');
    cy.get('input[placeholder="First Name"]').type('Fname');
    cy.get('input[placeholder="Last name"]').type('Lname');
    cy.get('input[placeholder="Password"]').type('jakopako');
    cy.get('input[placeholder="Repeat password"]').type('jakopako');
    cy.get('button').contains('Register').click();
    cy.get('.mat-simple-snackbar').should('contain', 'Email already taken');
  });
});
