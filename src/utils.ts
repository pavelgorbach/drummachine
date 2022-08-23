export const debounce = <T extends (...args: any) => void>(func: T, wait: number = 1000) => {
  let timer: NodeJS.Timeout

  const debounceFn = (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => { func(...args) }, wait)
  }

  return debounceFn as any
}