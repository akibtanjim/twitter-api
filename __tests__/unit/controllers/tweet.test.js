/* eslint-disable no-undef */

const { saveTweet } = require('../../../controllers');
const { generateFakeTweet } = require('../../../utils/faker');

describe('controllers/tweet', () => {
  describe('createTweet', () => {
    it('Should create new Tweet successfully', async () => {
      const mock = {
        mockRequest: () => {
          const req = {
            headaers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwicmVmcmVzaCI6dHJ1ZSwiaWF0IjoxNjUxMzUwMzEyLCJleHAiOjE2NTM5NzgzMTJ9.JZNMkx2XVHRBktek1wor1edI0x5KtR3ESLLmRcv-9Kc',
            },
            body: generateFakeTweet(),
          };
          req.body = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: {
              id: 10008,
              description:
                'I don’t want to ever go viral on Twitter for the wrong reasons. do you want to visit Rwanda or east Africa? let me host you. #VisitRwanda',
              isPublic: true,
              userId: 19,
              createdAt: '2022-04-29T19:11:55.000Z',
              updatedAt: '2022-04-29T19:11:55.000Z',
            },
            message: 'Successfully created tweet!',
          };
          res.json = jest.fn().mockReturnValue(res);
          res.status = jest.fn().mockReturnValue(res);
          res.json = jest.fn().mockReturnValue(res);
          return res;
        },
      };
      const req = mock.mockRequest();
      const res = mock.mockResponse();
      await saveTweet(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });
});
