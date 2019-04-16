const getAPLFromGraphql = require('./getAPIFromGraphql');

const test = (res, req) => {
    const validAccess = [];
    const graphql = req.body.query;
    const api = getAPLFromGraphql(graphql);
    if (api[0] !== 'query') {
        res.status(403).end('only can query');
        return 0;
    }
    api.shift();
    const invalidAccess = api.filter(item => (!validAccess.includes(item)));
    if (invalidAccess.length !== 0) {
        res.status(403).end(`No access permission ---- ${invalidAccess}`);
        return 0;
    }
    return 1;
};
