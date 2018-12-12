describe('App', () => {
  const hostName = 'http://localhost:3000';

  describe('root view', () => {
    beforeAll(async () => {
      await page.goto(`${hostName}/`, { waitUntil: 'networkidle0' });
    });

    it('should display items', async () => {
      await expect(page).toMatchElement(
        'ul[data-selector=item-list] li[data-selector=item-list-element]'
      );
    });
    it('has a link for each item', async () => {
      await expect(page).toMatchElement('a[data-selector=item-link-detail]');
    });
    it('has a link forward a valid url', async () => {
      const url = await page.$eval('a[data-selector=item-link-detail]', e =>
        e.getAttribute('href')
      );
      await page.click('a[data-selector=item-link-detail]');
      await expect(page.url()).toMatch(url);
    });
  });
});
