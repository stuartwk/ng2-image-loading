import { AsycImgPage } from './app.po';

describe('asyc-img App', function() {
  let page: AsycImgPage;

  beforeEach(() => {
    page = new AsycImgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
