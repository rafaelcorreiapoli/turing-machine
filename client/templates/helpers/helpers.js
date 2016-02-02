Template.registerHelper('moveToIcon', (direction) => {
  if (direction === Values.DIRECTION_RIGHT) {
    return `<i class='fa fa-arrow-right></i>`;
  }
  return `<i class='fa fa-arrow-left></i>`;
});
