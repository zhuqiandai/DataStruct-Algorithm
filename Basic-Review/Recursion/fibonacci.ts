/**
 *  斐波那契数列
 */

const fibonacci = (n: number) => {
  return fibonacci(n - 1) * fibonacci(n - 2)
}
