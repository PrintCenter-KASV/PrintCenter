/*describe('wrongLogin.cy.ts', () => {
  it('shows an error message when login fails', () => {
    cy.visit('http://localhost:4200/home');
    cy.get('button').contains('REGISTER').click();
    cy.get('input[placeholder="Username"]').type('TestUsername2');
    cy.get('input[placeholder="Email"]').type('test@gmail.com');
    cy.get('input[placeholder="First Name"]').type('Fname');
    cy.get('input[placeholder="Last name"]').type('Lname');
    cy.get('input[placeholder="Password"]').type('jakopako');
    cy.get('input[placeholder="Repeat password"]').type('jakopako');
    cy.get('button').contains('Register').click();
    cy.get('.mat-simple-snackbar').should(
      'contain',
      'User successfully registered!'
    );
    cy.get('button[id="cyLogout"]').click();

    cy.visit('http://localhost:4200/home');
    cy.get('button').contains('REGISTER').click();
    cy.get('input[placeholder="Username"]').type('TestUsername2');
    cy.get('input[placeholder="Email"]').type('test@gmail.com');
    cy.get('input[placeholder="First Name"]').type('Fname');
    cy.get('input[placeholder="Last name"]').type('Lname');
    cy.get('input[placeholder="Password"]').type('jakopako');
    cy.get('input[placeholder="Repeat password"]').type('jakopako');
    cy.get('button').contains('Register').click();
    cy.get('.mat-simple-snackbar').should(
      'contain',
      'User already exist!'
    );
  });
});
*/