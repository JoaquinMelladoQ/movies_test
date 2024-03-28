export const extractIdFromUrl = (url: string | null) => {
  const match = url && url?.match(/(\d+)\/?$/);
  const id = match ? match[1] : null;
  return id;
};
