// https://stackoverflow.com/questions/563406/add-days-to-javascript-date
function manageDate(date) {
  new Date(
    new Date(date).setDate(new Date(date).getDate() + 1),
  ).toLocaleDateString('en-US');
}

export default manageDate;
