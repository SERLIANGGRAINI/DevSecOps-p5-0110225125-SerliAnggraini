const request = require('supertest');
const app = require('../src/app');
const { tambah } = require('../src/math');

test('Fungsi tambah harus benar', () => {
  expect(tambah(2, 3)).toBe(5);
});

test('GET / harus return status 200', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
});
