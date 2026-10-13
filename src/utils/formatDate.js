export const FormatDate = (date) => {
  const _date = new Date(date);

  if (isNaN(_date.getTime())) {
    console.error("Invalid date:", date);
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(_date);
};