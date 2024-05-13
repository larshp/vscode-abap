import * as chai from 'chai';
import fs from 'node:fs';

function doesIncrease(abap) {
  const json = JSON.parse(fs.readFileSync("language-configuration.json", "utf8"));
  console.dir(json);
  return false;
}

describe('Test indentation increase and decrease', function() {
  it('change', async () => {
    const abap = `WRITE 2.`
    chai.expect(doesIncrease(abap)).to.equal(false);
  });
});