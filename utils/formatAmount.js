const formatAmount = (amount) => {
  const num = parseFloat(amount);
  if (isNaN(num)) return "0";
  return num.toLocaleString("en-IN");
};

export default formatAmount;
