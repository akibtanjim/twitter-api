/* eslint-disable no-undef */

const {
  getUsers,
  getUser,
  saveUser,
  removeUser,
  modifyUser,
} = require('../../../controllers');

describe('controllers/user', () => {
  describe('getUsers', () => {
    it('Should get all the user', async () => {
      const mock = {
        mockRequest: () => {
          const req = {
            headaers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwicmVmcmVzaCI6dHJ1ZSwiaWF0IjoxNjUxMzUwMzEyLCJleHAiOjE2NTM5NzgzMTJ9.JZNMkx2XVHRBktek1wor1edI0x5KtR3ESLLmRcv-9Kc',
            },
          };
          req.body = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: [
              {
                id: 1,
                name: 'admin',
                email: 'admin@xyz.com',
                role: 'admin',
                createdAt: '2022-04-29T19:11:55.000Z',
                updatedAt: '2022-04-29T19:11:55.000Z',
              },
            ],
            message: 'Successfully fetched all users!',
          };
          res.json = jest.fn().mockReturnValue(res);
          res.status = jest.fn().mockReturnValue(res);
          res.json = jest.fn().mockReturnValue(res);
          return res;
        },
      };
      const req = mock.mockRequest();
      const res = mock.mockResponse();
      await getUsers(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });

  describe('getUser', () => {
    it('Should get user with id 1', async () => {
      const mock = {
        mockRequest: () => {
          const req = {
            headaers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwicmVmcmVzaCI6dHJ1ZSwiaWF0IjoxNjUxMzUwMzEyLCJleHAiOjE2NTM5NzgzMTJ9.JZNMkx2XVHRBktek1wor1edI0x5KtR3ESLLmRcv-9Kc',
            },
          };
          req.body = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: {
              id: 1,
              name: 'admin',
              email: 'admin@xyz.com',
              role: 'admin',
              createdAt: '2022-04-29T19:11:55.000Z',
              updatedAt: '2022-04-29T19:11:55.000Z',
            },
            message: 'Successfully fetched all users!',
          };
          res.json = jest.fn().mockReturnValue(res);
          res.status = jest.fn().mockReturnValue(res);
          res.json = jest.fn().mockReturnValue(res);
          return res;
        },
      };
      const req = mock.mockRequest();
      const res = mock.mockResponse();
      await getUser(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });

  describe('saveUser', () => {
    it('Should createUser', async () => {
      const mock = {
        mockRequest: () => {
          const req = {
            headaers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwicmVmcmVzaCI6dHJ1ZSwiaWF0IjoxNjUxMzUwMzEyLCJleHAiOjE2NTM5NzgzMTJ9.JZNMkx2XVHRBktek1wor1edI0x5KtR3ESLLmRcv-9Kc',
            },
          };
          req.body = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: {
              id: 1,
              name: 'admin',
              email: 'admin@xyz.com',
              role: 'admin',
              createdAt: '2022-04-29T19:11:55.000Z',
              updatedAt: '2022-04-29T19:11:55.000Z',
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
      await saveUser(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });

  describe('removeUser', () => {
    it('Should delete user', async () => {
      const mock = {
        mockRequest: () => {
          const req = {
            headaers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwicmVmcmVzaCI6dHJ1ZSwiaWF0IjoxNjUxMzUwMzEyLCJleHAiOjE2NTM5NzgzMTJ9.JZNMkx2XVHRBktek1wor1edI0x5KtR3ESLLmRcv-9Kc',
            },
          };
          req.body = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: 1,
            message: 'Successfully fetched all users!',
          };
          res.json = jest.fn().mockReturnValue(res);
          res.status = jest.fn().mockReturnValue(res);
          res.json = jest.fn().mockReturnValue(res);
          return res;
        },
      };
      const req = mock.mockRequest();
      const res = mock.mockResponse();
      await removeUser(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });

  describe('modifyUser', () => {
    it('Should update user', async () => {
      const mock = {
        mockRequest: () => {
          const req = {
            headaers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwicmVmcmVzaCI6dHJ1ZSwiaWF0IjoxNjUxMzUwMzEyLCJleHAiOjE2NTM5NzgzMTJ9.JZNMkx2XVHRBktek1wor1edI0x5KtR3ESLLmRcv-9Kc',
            },
          };
          req.body = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: 1,
            message: 'Successfully fetched all users!',
          };
          res.json = jest.fn().mockReturnValue(res);
          res.status = jest.fn().mockReturnValue(res);
          res.json = jest.fn().mockReturnValue(res);
          return res;
        },
      };
      const req = mock.mockRequest();
      const res = mock.mockResponse();
      await modifyUser(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });
});
