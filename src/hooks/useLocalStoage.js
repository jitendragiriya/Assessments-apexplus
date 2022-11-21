//get local storage data
export const getLocalData = async (name) => {
  const data = localStorage.getItem(name);
  const finalData = await JSON.parse(data);
  return finalData;
};

//set local storage data
export const setLocalData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

//remove local storage data
export const removeLocalData = (name) => {
  localStorage.removeItem(name);
};
