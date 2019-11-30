
const getStringValues = (dataName) => {
    const countValues = dataName.split(', ').length;
    let result = '';
    let i = 1;
    for (; i < countValues; i++) {
        result += `$${i}, `;
    }
    result += `$${i}`;

    return `(${result})`;
};

module.exports = getStringValues;