import './less/index.less'
import { isString, test1 } from './util'
import { get } from 'lodash-es'

console.log(get({ a: 1 }, 'a'))

test1()

function add(a, b) {
  return () => {
    if (isString(a)) {
      return a
    } else return b
  }
}
