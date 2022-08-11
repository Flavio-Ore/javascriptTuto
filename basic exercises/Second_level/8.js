const removeWord = (str = '', regex = '') => str.replace(new RegExp(regex, 'ig'), '')

export default removeWord