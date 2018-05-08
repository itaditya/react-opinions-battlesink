export default (mapping) => {
  const c = [];
  Object.entries(mapping).forEach(([key, value]) => value && c.push(key));
  return c.join(' ');
}