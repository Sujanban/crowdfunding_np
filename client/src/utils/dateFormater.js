export const formatDate = (createdAt) => {
  return new Date(createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
};


export const formatTime = (createdAt) => {
  return new Date(createdAt).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
    }
  );
}
