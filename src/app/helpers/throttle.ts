export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
) {
  let inThrottle: boolean = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
}
