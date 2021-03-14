import dayjs from "dayjs";

export const formatReviewDate = (date) => {
  return dayjs(date).format(`MMMM D, YYYY`);
};
