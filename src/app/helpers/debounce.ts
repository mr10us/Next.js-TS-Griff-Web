export function debounce<T extends (...args: any) => any>(
  func: T,
  wait: number,
  immediate = false,
): T {
  let timeoutId: string | number | NodeJS.Timeout | undefined;

  return function debouncedFunction(
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    const later = () => {
      timeoutId = undefined;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeoutId;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(later, wait);

    if (callNow) func.apply(this, args);
  } as T;
}
