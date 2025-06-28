import { expect } from 'chai';
import request from 'supertest'
import app from '../index.js'

describe('create-order', () => {
    it('API integration test - create a new order', async () => {
        const res = await request(app)
            .post('/api/order/create')
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWZjZGViZTJlNzcxNWEzOGNjYTAwZiIsImlkZW50aXR5Ijoicm92ZTRAdGVjaGZyaWFyLmNvbSIsImlhdCI6MTc1MTEwOTQ4OSwiZXhwIjoxNzUxMTYzNDg5fQ.jqHJ71qlHeOReYYxBlGXe2pJbe9MImxYLHQAwNhmERU')
            .send({
                "securityId": "01",
                "transactionType": "BUY",
                "quantity": "11",
                "orderValue": "1000"
            })
        expect(res.status).to.equal(200)
    })
})