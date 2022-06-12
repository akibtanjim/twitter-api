/* eslint-disable no-undef */

const { saveTweet, getSelfTweets } = require('../../../controllers');
const { generateFakeTweet } = require('../../../utils');

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
    it('Should fetch user tweets successfully', async () => {
      const mock = {
        mockRequest: () => {
          const req = {
            headaers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwicmVmcmVzaCI6dHJ1ZSwiaWF0IjoxNjUxMzUwMzEyLCJleHAiOjE2NTM5NzgzMTJ9.JZNMkx2XVHRBktek1wor1edI0x5KtR3ESLLmRcv-9Kc',
            },
            query: {
              type: 'all',
              page: 1,
            },
          };
          req.query = jest.fn().mockReturnValue(req);
          req.params = jest.fn().mockReturnValue(req);
          return req;
        },

        mockResponse: () => {
          const res = {
            status: 'success',
            data: {
              totalItems: 191,
              items: [
                {
                  id: 9530,
                  description:
                    'Reiciendis quia assumenda quo itaque consectetur error.',
                  isPublic: 0,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
                {
                  id: 9474,
                  description:
                    'Doloribus odio et ut modi vel et non doloremque.',
                  isPublic: 0,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
                {
                  id: 9459,
                  description: 'Accusamus in voluptatem.',
                  isPublic: 0,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
                {
                  id: 9434,
                  description: 'Et rem asperiores cupiditate ea ut.',
                  isPublic: 1,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
                {
                  id: 9424,
                  description:
                    'Quas consequatur hic dolorem quam consequuntur et.',
                  isPublic: 0,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
                {
                  id: 9405,
                  description: 'Commodi aliquam voluptates praesentium.',
                  isPublic: 0,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
                {
                  id: 9391,
                  description:
                    'Quasi ut dolorem voluptatibus facilis qui consequatur sit.',
                  isPublic: 0,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
                {
                  id: 9388,
                  description:
                    'Deserunt reiciendis molestias doloribus delectus rem dolores velit mollitia eos.',
                  isPublic: 0,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
                {
                  id: 9378,
                  description:
                    'Est quae qui consequatur eum temporibus voluptas.',
                  isPublic: 1,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
                {
                  id: 9323,
                  description:
                    'Debitis voluptates necessitatibus aspernatur beatae alias aut ducimus architecto et.',
                  isPublic: 0,
                  createdAt: '2022-06-12T07:41:23.000Z',
                  updatedAt: '2022-06-12T07:41:23.000Z',
                },
              ],
              totalPages: 20,
              currentPage: 1,
            },
            message: 'Successfully fetched all tweets!',
          };
          res.json = jest.fn().mockReturnValue(res);
          res.status = jest.fn().mockReturnValue(res);
          res.json = jest.fn().mockReturnValue(res);
          return res;
        },
      };
      const req = mock.mockRequest();
      const res = mock.mockResponse();
      await getSelfTweets(req, res);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });
});
