import EleventyFetch from '@11ty/eleventy-fetch';

export default async function () {
  let url = 'https://api.github.com/users/rarechrisclark/repos';

  // returning promise

  return await EleventyFetch(url, {
    duration: '1d',
    type: 'json',
  });
}
