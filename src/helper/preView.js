const preView = () => {
  const width = window.innerWidth;
  return width > 1200 ? 6 : width > 1024 ? 5 : width > 640 ? 3 : 2;
};

export default preView;
