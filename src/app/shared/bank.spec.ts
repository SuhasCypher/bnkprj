import { Bank } from './bank';

describe('Bank', () => {
  it('should create an instance', () => {
    expect(new Bank(branch,account_holder,account,email,phone,address,SavingsAccount)).toBeTruthy();
  });
});
