export const selectRandom = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const wait = (ms: number, ac?: AbortController) =>
  new Promise<void>((resolve, reject) => {
    const listener = () => {
      clearTimeout(timer);
      reject(ac?.signal.reason);
    };

    const timer = setTimeout(() => {
      ac?.signal.removeEventListener("abort", listener);
      resolve();
    }, ms);

    ac?.signal.addEventListener("abort", listener);
  });
