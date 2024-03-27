export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return new Intl.DateTimeFormat('es-ES', options).format(date);
};

export const generateUniqueId = (id: string) => {
  return `testId/:${id}`;
};
