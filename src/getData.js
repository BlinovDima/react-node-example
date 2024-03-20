export const getDataFromMain = (set) => {
  fetch("/main")
    .then((response) => response.json())
    .then((response) => set(response.message));
};

export const getDataFromContact = (set) => {
  fetch("/contact")
    .then((response) => response.json())
    .then((response) => set(response.message));
};

export const getDataFromAbout = (set) => {
  fetch("/about")
    .then((response) => response.json())
    .then((response) => set(response.message));
};
