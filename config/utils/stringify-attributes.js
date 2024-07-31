/**
 * Converts an attribute map object to a string of HTML attributes.
 * @param {Object} attributeMap - The attribute map object.
 * @returns {string} - The string of HTML attributes.
 */
export const stringifyAttributes = (attributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === 'undefined') return '';
      return `${attribute}="${value}"`;
    })
    .join(' ');
};
