import { Selector } from 'testcafe';

fixture ('Exam Page')
  .page ('http://localhost:8080');

test('should show the title containing the question number', async t => {
  await t
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .click(Selector('[data-testid="exam-button"]'))
    .expect(Selector('.title-on-page').innerText).eql('Exam Question #1')
});

test('should show the question and three answers', async t => {
  await t
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .click(Selector('[data-testid="exam-button"]'))
    .expect(Selector('.question').visible).ok()
    .expect(Selector('#exam').find('.answer-button').count).eql(3)
});

test('should show the next button on selecting on of the answers', async t => {
  await t
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .click(Selector('[data-testid="exam-button"]'))
    .expect(Selector('.question').visible).ok()
    .expect(Selector('.next-button').visible).notOk()
    .click(Selector('#exam').find('.answer-button').nth(0))
    .expect(Selector('.next-button').visible).ok()
});

test('should move to the next question when clicking on next', async t => {
  await t
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .click(Selector('[data-testid="exam-button"]'))
    .expect(Selector('.question').visible).ok()
    .click(Selector('#exam').find('.answer-button').nth(0))
    .click(Selector('.next-button'))
    .expect(Selector('.title-on-page').innerText).eql('Exam Question #2')
    .expect(Selector('.question').visible).ok()
    .expect(Selector('#exam').find('.answer-button').count).eql(3)
});
