import './css/public.css'
import './css/login.css'
import { isString } from './util'

function add(a, b) {
  return () => {
    if (isString(a)) {
      return a
    } else return b
  }
}
