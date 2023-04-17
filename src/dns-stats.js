const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainObj = {}
  domains.forEach(elem => {
    let domain = ''
    return elem.split(".").reverse().forEach(item=>{
      domain += "." + item
      if(domain in domainObj){
        domainObj[domain]++
      }else{
        domainObj[domain] = 1
      }
    })
  })
  return domainObj
}
getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
])
module.exports = {
  getDNSStats
};
