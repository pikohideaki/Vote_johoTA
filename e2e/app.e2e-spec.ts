import { VotingPage } from './app.po';

describe('voting App', () => {
  let page: VotingPage;

  beforeEach(() => {
    page = new VotingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
