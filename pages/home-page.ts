import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly signUpHeaderButton: Locator;
  readonly loginHeaderButton: Locator;
  readonly monitorsCategory: Locator;
  readonly signUpModal: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signUpButton: Locator;
  readonly logInModal: Locator;
  readonly loginUsername: Locator;
  readonly loginPassword: Locator;
  readonly loginButton: Locator;
  readonly username: string = 'c1ph3r';
  readonly password: string = 'ISquashBugsForALiving';

  constructor(page: Page) {
    this.page = page;
    this.signUpHeaderButton = page.locator('a', { hasText: 'Sign up' });
    this.loginHeaderButton = page.locator('a', { hasText: 'Log in' });
    this.monitorsCategory = page.locator('a', { hasText: 'Monitors' });
    this.signUpModal = page.locator('//*[@id="signInModal"]/div/div');
    this.usernameInput = page.locator('//*[@id="sign-username"]');
    this.passwordInput = page.locator('//*[@id="sign-password"]');
    this.signUpButton = page.locator('button', { hasText: 'Sign up'});
    this.logInModal = page.locator('//*[@id="logInModal"]/div/div');
    this.loginUsername = page.locator('//*[@id="loginusername"]');
    this.loginPassword = page.locator('//*[@id="loginpassword"]');
    this.loginButton = page.locator('button', {hasText: 'Log in'});
  }

  async goto() {
    await this.page.goto('https://demoblaze.com');
  }

  async openSignUpModal() {
    await this.signUpHeaderButton.click();
    await expect(this.signUpModal).toBeVisible();
  }


  async openSignInModal() {
    await this.loginHeaderButton.click();
    await expect(this.logInModal).toBeVisible();
  }

  async fillSignUpForm(){
    await this.usernameInput.fill(this.username);
    await this.passwordInput.fill(this.password);
  }

  async signUp(){
    await this.openSignUpModal();
    await this.fillSignUpForm();
    await this.signUpButton.click();
    this.page.on('dialog', async dialog => {
        var msg = dialog.message();
        dialog.dismiss();
        return msg;
    })
  }




//   async pageObjectModel() {
//     await this.go();
//     await this.pomLink.click();
//   }
}