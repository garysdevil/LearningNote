
const axios = require('axios');

const testIntent = async () => {
    const intent = ['composition_room_occupancy',
        'composition_assigned_seats',
        'define_room_utilization',
        'distribution_utilization'];
    const array = ['how many occupied rooms do I have',
        'how many unoccupied seats do I have',
        'what is room utilization',
        'what is maximun room utilization'];
    array.forEach(async sentence => {
        const result = (await axios.get(`http://127.0.0.1:8888/secondParse?query=${sentence}`)
            .catch(error => { console.log(error); })).data;
        console.log(result);
    });
    // const result = (await axios.get(`http://127.0.0.1:8888/secondParse?query=${array[3]}`)
    //     .catch(error => { console.log(error); })).data;
    // console.log(result);
};

const dbOperate = async () => {
    const knex = require('knex');
    const database = {
        user: 'ennead',
        password: 'password',
        host: '127.0.0.1',
        database: 'ennead_product',
        port: '15433',
    };
    const dbtool = knex({
        client: 'pg',
        connection: database,
        pool: { min: 2, max: 2 },
    });
    const result = await dbtool('employee')
        .select('*');
    const allName = result.map(ele => ele.employeeName);
    console.dir(allName.join(';'));
};

// testIntent();
// dbOperate();
const slotsInExpression = (expression, array, fromindex) => {
    const start = expression.indexOf('(', fromindex);
    const stop = expression.indexOf(')', fromindex);
    const slot = expression.substring(start + 1, stop);
    if (start !== -1) {
        fromindex = stop + 1;
        array.push(slot);
        return slotsInExpression(expression, array, fromindex);
    }
    return array;
};
// const arra = slotsInExpression('fsdf', [], 0);
const recursion = input => {
    const joinMark = ' *|* ';
    let gResults = [];
    let gResult = [];
    const recursionArr = (arr, depth) => {
        for (let i = 0; i < arr[depth].length; i += 1) {
            gResult[depth] = arr[depth][i];
            if (depth !== arr.length - 1) {
                recursionArr(arr, depth + 1);
            } else {
                gResults.push(gResult.join(joinMark));
            }
        }
    };
    const getAllExpComb = arr => {
        gResults = [];
        gResult = [];
        recursionArr(arr, 0);
        return gResults;
    };
    const output = getAllExpComb(input);
    console.log(output);
};
