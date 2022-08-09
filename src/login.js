import './css/public.css'
import './css/login.css'

function add(a, b) {
  return () => {
    a + b
  }
}

console.log(add())
