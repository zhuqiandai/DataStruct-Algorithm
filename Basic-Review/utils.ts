/**
 *
 * @param arr 交换的数组
 * @param i
 * @param j
 */
export function swap(arr: Array<number>, i: number, j: number): void {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
