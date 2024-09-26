export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
      id: '2',
      firstname: 'John',
      lastname: 'Doe',
      age: 33,
      currency: 'USD',
      country: 'Sweden',
      city: 'Stockholm',
      username: 'JohnDoe',
      avatar: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
