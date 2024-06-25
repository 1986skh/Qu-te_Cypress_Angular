describe('Home page initial display', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
  });
});

describe('Add Pokémon Form', () => {
  beforeEach(() => {
    cy.visit('/'); 
    cy.wait(4000);
  });

  it('Should add new pokemon to list', () => {
    cy.get('input[formControlName="name"]').type('GOLDEEN');
    cy.get('input[formControlName="imageUrl"]').type('https://images.pokemontcg.io/xy6/12.png');
    cy.get('input[formControlName="supertype"]').type('Pokémon');
    cy.get('input[type="submit"]').click();
    cy.contains('GOLDEEN').should('be.visible');
  });

  it('Should forbid pokemon creation if no image', () => {
    cy.get('input[formControlName="name"]').type('NATU');
    cy.get('input[formControlName="supertype"]').clear().type('Pokémon');
    cy.contains('attention il faut une image pour ce pokemon').should('be.visible');
    cy.wait(5000);
    cy.get('input[type="submit"]').click();
   
  });
  it('Should forbid pokemon creation if no image', () => {
    cy.get('input[formControlName="name"]').type('natu').wait(200);
    cy.get('input[formControlName="imageUrl"]').type('https://images.pokemontcg.io/xy8/27.png');
    cy.get('input[formControlName="supertype"]').clear().type('Pokémon').wait(200);
    cy.get('input[type="submit"]').click().wait(200);

});
});

