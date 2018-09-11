export const push = (arr = [], element) => [ ...arr, element];

export const pushAll = (arr = [], ...elements) => [ ...arr, ...elements];