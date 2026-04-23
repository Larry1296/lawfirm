export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isEmpty = (value) =>
  value === null || value === undefined || value.trim() === "";
