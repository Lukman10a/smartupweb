interface RequestQueueItem {
  url: string;
  options: RequestInit;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
}

async function fetchWithExponentialBackoff<T>(
  url: string,
  options: RequestInit,
  retries = 7,
  backoff = 300,
): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return response.json();
    } else if (response.status === 429 && retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, backoff));
      return fetchWithExponentialBackoff(
        url,
        options,
        retries - 1,
        backoff * 2,
      );
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(error?.message);
  }
}

const requestQueue: RequestQueueItem[] = [];
let isProcessingQueue = false;

async function processQueue(): Promise<void> {
  if (isProcessingQueue || requestQueue.length === 0) return;

  isProcessingQueue = true;

  while (requestQueue.length > 0) {
    const { url, options, resolve, reject } =
      requestQueue.shift() as RequestQueueItem;
    try {
      const result = await fetchWithExponentialBackoff(url, options);
      resolve(result);
    } catch (error) {
      reject(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 300)); // Wait 300ms between requests
  }

  isProcessingQueue = false;
}

export function queueRequest(url: string, options: RequestInit): Promise<any> {
  return new Promise((resolve, reject) => {
    requestQueue.push({ url, options, resolve, reject });
    processQueue();
  });
}
