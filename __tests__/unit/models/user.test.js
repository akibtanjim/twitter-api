/* eslint-disable no-undef */
const { user } = require('../../../models');

describe('models/user', () => {
  it('Should return user list containing id 1', async () => {
    const users = await user.findAll();
    return expect(users).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 1 })])
    );
  });
  it('Should return user with id 1', async () => {
    const userDetails = await user.findByPk(1);
    return expect(userDetails).toEqual(expect.objectContaining({ id: 1 }));
  });
  it('Should return user with email admin@xyz.com', async () => {
    const userDetails = await user.findOne({
      where: { email: 'admin@xyz.com' },
    });
    return expect(userDetails).toEqual(
      expect.objectContaining({ email: 'admin@xyz.com' })
    );
  });
});
