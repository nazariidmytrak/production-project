describe('The user goes to the articles page', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles');
    });
  });
  it('and the articles are successfully loaded', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it('and the articles are successfully loaded (fixture example)', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/articles?*',
        headers: { 'Cache-Control': 'no-cache' },
      },
      { fixture: 'articles.json' }
    );
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it.skip('The example of a skipped test', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    cy.get('asfasf').should('exist');
  });
});
