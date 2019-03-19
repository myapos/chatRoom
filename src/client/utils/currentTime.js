const currentTime = () => {
  const d = new Date();
  const formatted = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDay()}
  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return formatted;
}

export default currentTime;