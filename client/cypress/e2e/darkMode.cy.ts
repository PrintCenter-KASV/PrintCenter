describe('darkMode.cy.ts', () => {
    it('turn on darmode', () => {
      cy.visit('http://localhost:4200/home');
      cy.wait(3000);
      cy.get('mat-slide-toggle').click();
    })
  })