const shortenDate = (date) => {
  return date.split("").slice(0, 10).join("");
};

export default shortenDate;
