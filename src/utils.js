// Pointer to previous setTimeout(getBooks) from actions.updateSearch()
let queuedRequest = null;

// Helper function to append 'title' query param to fetch request
export const paramify = (input) => {
  return `?title=${input.split(' ').join('+')}`;
}

export const enqueueRequest = (newRequest) => {
  // Invokes clearTimeout() on previously assigned timed fetch request
  if (!newRequest) return queuedRequest;
  // New fetch request is enqueued; executed if 500ms have elapsed
  queuedRequest = newRequest;
  return queuedRequest;
}