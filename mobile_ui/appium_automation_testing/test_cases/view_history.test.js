var expect = require('chai').expect;

describe('Testing splash landing page', () => {
  // Adding time out to make sure the app is load prior to test is run
  beforeEach(() => {
    $('~splashContainer').waitForDisplayed(20000, false);
  });

  it('should display splash Container', async => {
    expect($('~splashContainer').isDisplayed()).to.equal(true);
  });
  it('should display sign Screen Container after clicking splash Touchable Opacity Button', async => {
    $('~splashTouchableOpacityButton').click();

    $('~signScreenContainer').waitForDisplayed(10000);
    expect($('~signScreenContainer').isDisplayed()).to.equal(true);
  });
});

describe('Testing Sign in activity', () => {
  beforeEach(() => {
    $('~signScreenContainer').waitForDisplayed(10000, false);
  });

  it('should fail on signing in (empty username or password)', async => {
    $('~signScreenUserName').setValue('');
    $('~signScreenPassword').setValue('');

    $('~signScreenSignInButton').click();

    expect(driver.getAlertText()).to.equal(
      'Wrong Input!\nUsername or password field cannot be empty.',
    );

    driver.execute('mobile:acceptAlert', {action: 'accept'});
  });

  it('should fail on signing in (username or password is incorrect)', async => {
    $('~signScreenUserName').setValue('');
    $('~signScreenPassword').setValue('');

    $('~signScreenSignInButton').click();

    expect(driver.getAlertText()).to.equal(
      'Invalid User!\nUsername or password is incorrect.',
    );

    driver.execute('mobile:acceptAlert', {action: 'accept'});
  });

  it('should successful on signing in and show home Screen', async => {
    $('~signScreenUserName').setValue('user1');
    $('~signScreenPassword').setValue('password');

    $('~signScreenSignInButton').click();

    $('~homeScreenContainer').waitForDisplayed(10000);
    expect($('~homeScreenContainer').isDisplayed()).to.equal(true);
  });
});

// describe('Testing user view all history', () => {
//   beforeEach(() => {
//     expect($('~homeScreenContainer').isDisplayed()).to.equal(true);
//   });
//   it('should have two buttons on home screen 1.take new sample button, 2.view sample', async => {
//     expect($('~homeScreenTakeNewSampleButton').isDisplayed()).to.equal(true);
//     expect($('~homeScreenViewSampleButton').isDisplayed()).to.equal(true);
//   });

//   it('should show sampling history screen after click view sample button', async => {
//     $('~homeScreenViewSampleButton').click();
//     expect($('~sampleHistoryScreenContainer').isDisplayed()).to.equal(true);
//   });
// });
