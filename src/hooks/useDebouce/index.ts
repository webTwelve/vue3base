export function useDebouceFn<T extends (...args: any[]) => any>(
  fn: T,
  delay = 1000
) {
  let timer: ReturnType<typeof setTimeout>
  return function (...args: any[]): void {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
