/**
 * Validates a given value is a literal Object.
 *
 * @param {*} value
 * @return {Boolean}
 */
const isObjectLiteral = (value) => {
    try {
        const constructorIsObject = value.constructor.name === 'Object';

        return constructorIsObject && value == '[object Object]'; // eslint-disable-line eqeqeq
    } catch (_) {
        return false;
    }
};

export default isObjectLiteral;
