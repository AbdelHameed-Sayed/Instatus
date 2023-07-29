export const dateFormatHandler = (date: string) => {
  const dateTimeObj = new Date(date);
  const formattedDate = dateTimeObj.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return formattedDate;
};
