let profileId = '';

describe('The user goes to the profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${profileId}`);
    });
  });
  afterEach(() => cy.resetProfile(profileId));
  it('and the profile is successfully loaded', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'John');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'Doe');
  });
  it('and edits it', () => {
    cy.updateProfile('test firstname', 'test lastname');
    cy.getByTestId('ProfileCard.firstname').should(
      'have.value',
      'test firstname',
    );
    cy.getByTestId('ProfileCard.lastname').should(
      'have.value',
      'test lastname',
    );
  });
});
