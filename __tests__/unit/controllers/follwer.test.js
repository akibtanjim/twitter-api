/* eslint-disable no-undef */

const { follow } = require('../../../controllers');
const { generateFakeFollowing } = require('../../../utils');

describe('controllers/follwer', () => {
  describe('follow', () => {
    it('Should follow user successfully', async () => {
      const mock = {
        mockRequest: () => {
          const req = {
            headaers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwicmVmcmVzaCI6dHJ1ZSwiaWF0IjoxNjUxMzUwMzEyLCJleHAiOjE2NTM5NzgzMTJ9.JZNMkx2XVHRBktek1wor1edI0x5KtR3ESLLmRcv-9Kc',
            },
            body: generateFakeFollowing(),
          };
          req.body = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: {
              id: 203,
              userId: 2,
              followedBy: 1,
              updatedAt: '2022-06-12T20:24:50.651Z',
              createdAt: '2022-06-12T20:24:50.651Z',
            },
            message: 'Successfully followed user!',
          };
          res.json = jest.fn().mockReturnValue(res);
          res.status = jest.fn().mockReturnValue(res);
          res.json = jest.fn().mockReturnValue(res);
          return res;
        },
      };
      const req = mock.mockRequest();
      const res = mock.mockResponse();
      await follow(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });
});
