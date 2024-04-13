const shortenStory = (text) => {
  return text.story.text.split(" ").slice(0, 20).join(" ");
};

export default shortenStory;
