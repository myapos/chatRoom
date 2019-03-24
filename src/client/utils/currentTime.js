const currentTime = () => {
  const d = new Date();
  const formatted = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  return formatted;
};

export default currentTime;
