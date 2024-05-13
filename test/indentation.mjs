import * as chai from 'chai';
import fs from 'node:fs';

function doesIncrease(abap) {
  const json = JSON.parse(fs.readFileSync("language-configuration.json", "utf8"));
  const regex = new RegExp(json.indentationRules.increaseIndentPattern.pattern, json.indentationRules.increaseIndentPattern.flags);
  return abap.match(regex) !== null;
}

describe('Test indentation increase and decrease', function() {
  it('WRITE, no increase', async () => {
    const abap = `WRITE 2.`
    chai.expect(doesIncrease(abap)).to.equal(false);
  });

  it('INCREASE, increase', async () => {
    const abap = `IF foo = bar.`
    chai.expect(doesIncrease(abap)).to.equal(true);
  });
});