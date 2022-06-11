/* eslint-disable no-undef */

const { health } = require('../../../controllers');

describe('controllers/health', () => {
  describe('health', () => {
    it('Should return', async () => {
      const mock = {
        mockRequest: () => {
          const req = {};
          req.body = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: {
              id: 4,
              name: 'Md. Tanjim-Al-Akib',
              role: 'admin',
              email: 'akibtanjim@xyz.com',
              updatedAt: '2022-05-01T05:41:33.025Z',
              createdAt: '2022-05-01T05:41:33.025Z',
            },
            message: 'Successfully created user!',
          };
          res.json = jest.fn().mockReturnValue(res);
          res.status = jest.fn().mockReturnValue(res);
          res.json = jest.fn().mockReturnValue(res);
          return res;
        },
      };
      const req = mock.mockRequest();
      const res = mock.mockResponse();
      await health(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });
});
