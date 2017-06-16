import { DroneRaceManagementPage } from './app.po';

describe('drone-race-management App', () => {
  let page: DroneRaceManagementPage;

  beforeEach(() => {
    page = new DroneRaceManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
