fixture('POST test')
  .page('http://localhost:3000');

test('Content-Type header is stripped', async (t) => {
    await t.debug();
    await t.click('#sendPost');
});