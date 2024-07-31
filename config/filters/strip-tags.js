export const stripTags = (string) => {
  return string.replace(/<[^>]*>?/gm, '');
};
