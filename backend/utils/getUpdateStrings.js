//SET name = $1, count = $2, reward = $3 WHERE id = $4
const getUpdateStrings = (data, bySearch = 'id') => {
    const dataArr = data.split(', ');
    const countValues = dataArr.length;
    let result = 'SET ';
    let i = 1;
    for (; i < countValues; i++) {
        result += `${dataArr[i - 1]} = $${i}, `;
    }
    result += `${dataArr[i - 1]} = $${i} WHERE ${bySearch} = $${i + 1}`;

    return result;
};

module.exports = getUpdateStrings;