import './less/index.less'
import { isString } from './util'

function add(a, b) {
  return () => {
    if (isString(a)) {
      return a
    } else return b
  }
}
