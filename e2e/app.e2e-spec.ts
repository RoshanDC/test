import { AbiralUserPage } from './app.po';

describe('abiral-user App', function() {
  let page: AbiralUserPage;

  beforeEach(() => {
    page = new AbiralUserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
