export const toPercentage = (value: number) => {
  return value.toLocaleString("en-CA", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};
