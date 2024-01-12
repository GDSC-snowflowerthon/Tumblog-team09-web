export const DateConverter = (dateString) => {
  const originalDate = new Date(dateString);
  const formattedDate = `${originalDate.getFullYear()}-${(
    originalDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${originalDate.getDate().toString().padStart(2, "0")}`;

  return formattedDate;
};
