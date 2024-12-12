// This hack is needed because there is a bug in vanilla install that causes the tests to fail
// TODO : Check up if it's fixed in an update of angular/karma/chrome
beforeAll(() => {
  window.onbeforeunload = (): string => 'preventerrors';
});

describe('Button Component', (): void => {
  it('should run fake test', (): void => {
    expect(true).toBe(true);
  });
});
