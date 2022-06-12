/* eslint-disable no-undef */
const request = require('supertest');

const { app } = require('../../../app');
const { refreshToken } = require('../../../utils');
const { generateFakeTweet } = require('../../../utils/faker');

let accessToken;
let userId;
const email = 'admin@xyz.com';
const password = '#Admin123';

describe('routes', () => {
  describe('/api/login', () => {
    it('Should POST /api/login with success ', async () => {
      await request(app)
        .post('/api/login')
        .send({ email, password })
        .then((response) => {
          accessToken = response.body.data.accessToken.token;
          return Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body.data).toHaveProperty('accessToken'),
            expect(response.body.data.accessToken).toHaveProperty('token'),
            expect(response.body.data.accessToken).toHaveProperty('expiresIn'),
            expect(response.body.data).toHaveProperty('refreshToken'),
            expect(response.body.data.refreshToken).toHaveProperty('token'),
            expect(response.body.data.refreshToken).toHaveProperty('expiresIn'),
          ]);
        });
    });
  });
  describe('/api/users', () => {
    it('Should GET /api/users with success ', async () => {
      await request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ email, password })
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('data'),
            expect(response.body.data).toBeInstanceOf(Object),
          ])
        );
    });
  });
  describe('/api/users/:userId', () => {
    it('Should GET /api/users/1 with success ', async () => {
      await request(app)
        .get('/api/users/1')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ email, password })
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('id'),
            expect(response.body.data).toHaveProperty('name'),
            expect(response.body.data).toHaveProperty('role'),
            expect(response.body.data).toHaveProperty('createdAt'),
            expect(response.body.data).toHaveProperty('updatedAt'),
          ])
        );
    });
  });
  describe('/api/users', () => {
    it('Should POST /api/users with success ', async () => {
      const data = {
        email: `user-${Date.now()}@xyz.com`,
        password,
        name: `user`,
        role: 'user',
      };
      await request(app)
        .post('/api/users')
        .set('Authorization', `Bearer ${accessToken}`)
        .send(data)
        .then((response) => {
          userId = response?.body?.data?.id || 1;
          return Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('id'),
            expect(response.body.data).toHaveProperty('name'),
            expect(response.body.data).toHaveProperty('role'),
            expect(response.body.data).toHaveProperty('createdAt'),
            expect(response.body.data).toHaveProperty('updatedAt'),
          ]);
        });
    });
  });
  describe('/api/users/:userId', () => {
    it('Should PUT /api/users/:userId with success ', async () => {
      await request(app)
        .put(`/api/users/${userId}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ name: 'user-updated' })
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
          ])
        );
    });
  });
  describe('/api/users/:userId', () => {
    it('Should DEL /api/users/:userId with success ', async () => {
      await request(app)
        .get(`/api/users/${userId}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
          ])
        );
    });
  });

  describe('/api/logout', () => {
    it('Should POST /api/logout with success ', async () => {
      await request(app)
        .post('/api/logout')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
          ])
        );
    });
  });

  describe('/api/api/refresh-token', () => {
    it('Should POST /api/refresh-token with success ', async () => {
      await request(app)
        .post('/api/refresh-token')
        .send({
          refreshToken: refreshToken({
            id: 1,
            name: 'admin',
            email: 'admin@xyz.com',
            role: 'admin',
            refresh: true,
          }),
        })
        .then((response) => {
          accessToken = response.body.data.accessToken.token;
          return Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body.data).toHaveProperty('accessToken'),
            expect(response.body.data.accessToken).toHaveProperty('token'),
            expect(response.body.data.accessToken).toHaveProperty('expiresIn'),
            expect(response.body.data).toHaveProperty('refreshToken'),
            expect(response.body.data.refreshToken).toHaveProperty('token'),
            expect(response.body.data.refreshToken).toHaveProperty('expiresIn'),
          ]);
        });
    });
  });

  describe('/api/health', () => {
    it('Should GET /api/health with success ', async () => {
      await request(app)
        .get(`/api/health`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('status'),
            expect(response.body.data).toHaveProperty('instance'),
            expect(response.body.data).toHaveProperty('name'),
            expect(response.body.data).toHaveProperty('author'),
            expect(response.body.data).toHaveProperty('version'),
          ])
        );
    });
  });
  describe('/api/tweets', () => {
    it('Should POST /api/tweets with success ', async () => {
      await request(app)
        .post('/api/tweets')
        .set('Authorization', `Bearer ${accessToken}`)
        .send(generateFakeTweet())
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('id'),
            expect(response.body.data).toHaveProperty('description'),
            expect(response.body.data).toHaveProperty('isPublic'),
            expect(response.body.data).toHaveProperty('userId'),
            expect(response.body.data).toHaveProperty('createdAt'),
            expect(response.body.data).toHaveProperty('updatedAt'),
          ])
        );
    });
  });
  describe('/api/tweets/me', () => {
    it('Should POST /api/tweets/me with success ', async () => {
      await request(app)
        .get('/api/tweets/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
          ])
        );
    });
    it('Should POST /api/tweets/me?type=all with success ', async () => {
      await request(app)
        .get('/api/tweets/me?type=all')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
          ])
        );
    });
    it('Should POST /api/tweets/me?type=public with success ', async () => {
      await request(app)
        .get('/api/tweets/me?type=public')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
          ])
        );
    });
    it('Should POST /api/tweets/me?type=private with success ', async () => {
      await request(app)
        .get('/api/tweets/me?type=private')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
          ])
        );
    });
    it('Should POST /api/tweets/me?page=1 with success ', async () => {
      await request(app)
        .get('/api/tweets/me?page=1')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('totalItems'),
            expect(response.body.data).toHaveProperty('items'),
            expect(response.body.data).toHaveProperty('currentPage'),
          ])
        );
    });
    it('Should POST /api/tweets/me?type=all&page=1 with success ', async () => {
      await request(app)
        .get('/api/tweets/me?type=all&page=1')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('totalItems'),
            expect(response.body.data).toHaveProperty('items'),
            expect(response.body.data).toHaveProperty('currentPage'),
          ])
        );
    });
    it('Should POST /api/tweets/me?type=public&page=1 with success ', async () => {
      await request(app)
        .get('/api/tweets/me?type=public&page=1')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('totalItems'),
            expect(response.body.data).toHaveProperty('items'),
            expect(response.body.data).toHaveProperty('currentPage'),
          ])
        );
    });
    it('Should POST /api/tweets/me?type=private&page=1 with success ', async () => {
      await request(app)
        .get('/api/tweets/me?type=private&page=1')
        .set('Authorization', `Bearer ${accessToken}`)
        .then((response) =>
          Promise.all([
            expect(response.statusCode).toBe(200),
            expect(response.body).toHaveProperty('status'),
            expect(response.body).toHaveProperty('data'),
            expect(response.body).toHaveProperty('message'),
            expect(response.body.data).toHaveProperty('totalItems'),
            expect(response.body.data).toHaveProperty('items'),
            expect(response.body.data).toHaveProperty('currentPage'),
          ])
        );
    });
  });
});
