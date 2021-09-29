const httpFuction= require('./index');
const context= require('../testing/Context');

test('Http trigger example' , async()=> {
    const request = {
        query: {name: 'abisel'}
    };

    await httpFuction(context, request);
    expect(context.res.body).toEqual('Welcome, abisel');
    expect(context.log.mock.calls.length).toBe(1);
});