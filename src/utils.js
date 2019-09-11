// Pointer to previous setTimeout(getBooks) from actions.updateSearch()
let queuedRequest = null;

// Helper function to append 'title' query param to fetch request
export const paramify = (params) => {
  const { input, newPage } = params;
  if (!input) return '';
  return `?title=${input.split(' ').join('+')}
    &page=${ newPage ? newPage : 1 }
    &has_fulltext=true
  `;
}

export const enqueueRequest = (newRequest) => {
  // Invokes clearTimeout() on previously assigned timed fetch request
  if (!newRequest) return queuedRequest;
  // New fetch request is enqueued; executed if 500ms have elapsed
  queuedRequest = newRequest;
  return queuedRequest;
}