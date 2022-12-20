const removeTagsInContent = (content: string) => {
  const tags = ["<br>", "<p>", "</p>", "<h1>", "</h1>", "<h2>", "</h2>", "<h3>", "</h3>", "<h4>", "</h4>", "<h5>", "</h5>"];
  tags.forEach((tag) => (content = content.replaceAll(tag, "")));
  return content;
};

export default removeTagsInContent;
