/* eslint-disable no-undef */
const {
  getTweetsVisibility,
  getLimitOffset,
  getPaginatedData,
} = require('../../../utils');

describe('utils/common', () => {
  describe('getTweetsVisibility (Public)', () => {
    it('Should return isPublic value as 1', async () => {
      const type = getTweetsVisibility('public');
      expect(type).toBe(1);
    });
  });
  describe('getTweetsVisibility (Private)', () => {
    it('Should return isPublic value as 0', async () => {
      const type = getTweetsVisibility('private');
      expect(type).toBe(0);
    });
  });
  describe('getTweetsVisibility (All)', () => {
    it('Should return isPublic value as sequlize condition [0,1]', async () => {
      const type = getTweetsVisibility('all');
      expect(typeof type).toBe('object');
    });
  });
  describe('getLimitOffset with out page', () => {
    it('Should return limit as 10 and offset as 10', async () => {
      const { limit, offset } = getLimitOffset();
      expect(limit).toBe(10);
      expect(offset).toBe(10);
    });
  });

  describe('getLimitOffset with page', () => {
    it('Should return limit as 10 and offset as 20', async () => {
      const { limit, offset } = getLimitOffset(2);
      expect(limit).toBe(10);
      expect(offset).toBe(20);
    });
  });
  describe('getLimitOffset with page & size', () => {
    it('Should return limit as 10 and offset as 20', async () => {
      const { limit, offset } = getLimitOffset(1, 20);
      expect(limit).toBe(20);
      expect(offset).toBe(20);
    });
  });

  describe('getPaginatedData', () => {
    it('Should return data with pagination info', async () => {
      const data = {
        count: 191,
        rows: [
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
            description: 'Doloribus odio et ut modi vel et non doloremque.',
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
            description: 'Quas consequatur hic dolorem quam consequuntur et.',
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
            description: 'Est quae qui consequatur eum temporibus voluptas.',
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
      };
      const { totalItems, items, totalPages, currentPage } = getPaginatedData(
        data,
        1,
        10
      );
      expect(totalItems).toBe(191);
      expect(items.length).toBe(10);
      expect(totalPages).toBe(20);
      expect(currentPage).toBe(1);
    });
  });
});
