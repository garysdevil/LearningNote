const getAPIFromGraphql = (graphql) => {
    const time = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} `;
    const API = []; // ['query or mutation', [api1], [api2] ]
    if (typeof graphql !== 'string') {
        return 'please input graphql string';
    }
    // 1. get rid of annotation
    let graphqlContent = graphql
        .split('\n')
        .filter(item => !item.includes('#'))
        .join(' ')
        .trim();
    // 2.  query or mutation
    if (graphqlContent.indexOf('query') === 0) {
        API.push('query');
    } else {
        API.push('mutation');
    }
    // 3. format
    graphqlContent = graphqlContent.substring(graphqlContent.indexOf('{') + 1, graphqlContent.lastIndexOf('}') - 1)
        .replace(/\t/g, ' ').replace(/{/g, ' { ').replace(/}/g, ' } ')
        .replace(/\([^)]*\)/g, ' ');
    graphqlContent = graphqlContent.split(' ').filter(item => item.length > 0); // get rid of suplus space
    // 4. get all query
    let count = 0;
    graphqlContent.forEach((item) => {
        if (item.includes('{')) {
            count += 1;
        }
        if (count === 0) {
            API.push(item.trim());
        }
        if (item.includes('}')) {
            count -= 1;
        }
    });
    console.log(`At ${time} call getAPIFromGraphql, returning ${API}`);
    return API;
};
module.exports = getAPIFromGraphql;
