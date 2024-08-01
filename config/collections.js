/** All blog posts as a collection. */
export const getAllPosts = (collection) => {
  return collection.getFilteredByGlob('./src/content/posts/**/*.md').reverse();
};

/** All markdown files as a collection for sitemap.xml */
export const onlyMarkdown = (collection) => {
  return collection.getFilteredByGlob('./src/**/*.md');
};

/** All tags from all posts as a collection - excluding custom collections */
export const tagList = (collection) => {
  const tagsSet = new Set();
  collection.getAll().forEach((item) => {
    if (!item.data.tags) return;
    item.data.tags.filter((tag) => !['posts', 'docs', 'all'].includes(tag)).forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

/** Generate a Search Index to be used for the search functionality */
export const searchIndex = (collection) => {
  const searchIndex = [];
  let id = 0;
  const posts = collection.getFilteredByGlob('./src/content/posts/**/*.md').reverse();

  posts.forEach((item) => {
    const url = item.url;
    searchIndex.push({
      id,
      url,
      title: `${item.data.title}`,
      summary: item.data.summary,
      tags: item.data.tags.filter((tag) => tag !== 'posts'),
    });
    id++;
  });

  return searchIndex;
};
