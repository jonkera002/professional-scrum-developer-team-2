import { Selector } from 'testcafe';

fixture ('Home Page')
    .page ('http://localhost:8080');

test('should show the two selector options', async t => {
  await t
    .expect(Selector('#app').find('[data-testid="operator-button"').count).eql(2);
});

test('should show the practice and the exam button when on or multiple operators are selected', async t => {
  await t
    .expect(Selector('[data-testid="practice-button"]').visible).notOk()
    .expect(Selector('[data-testid="exam-button"]').visible).notOk()
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .expect(Selector('[data-testid="practice-button"]').visible).ok()
    .expect(Selector('[data-testid="exam-button"]').visible).ok()
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(1))
    .expect(Selector('[data-testid="practice-button"]').visible).ok()
    .expect(Selector('[data-testid="exam-button"]').visible).ok();
});

test('should not show the practice and the exam button when no operators are selected', async t => {
  await t
    .expect(Selector('[data-testid="practice-button"]').visible).notOk()
    .expect(Selector('[data-testid="exam-button"]').visible).notOk()
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .expect(Selector('[data-testid="practice-button"]').visible).ok()
    .expect(Selector('[data-testid="exam-button"]').visible).ok()
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .expect(Selector('[data-testid="practice-button"]').visible).notOk()
    .expect(Selector('[data-testid="exam-button"]').visible).notOk();
});

test('should open exam when clicking on exam button', async t => {
  await t
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .click(Selector('[data-testid="exam-button"]'))
    .expect(Selector('#exam').visible).ok();
});
test('should open practice when clicking on practice button', async t => {
  await t
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .click(Selector('[data-testid="practice-button"]'))
    .expect(Selector('#practice').visible).ok();
});


