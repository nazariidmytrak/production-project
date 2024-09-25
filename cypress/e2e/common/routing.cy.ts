import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('Unauthorized user', () => {
    it('Go to a main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Go to a profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Go to a non-existent route', () => {
      cy.visit('/nonexistentroute');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('Authorized user', () => {
    beforeEach(() => cy.login('admin', '123'));
    it('Go to a profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Go to an articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
