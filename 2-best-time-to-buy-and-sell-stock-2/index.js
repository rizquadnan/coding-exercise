const maxProfit = function(prices) {
  // total: time O(n); space O(1)
  let profit = 0;
  for (let index = 0; index < prices.length; index++) {
    const currentPrice = prices[index];
    const nextPrice = prices[index + 1];

    if (nextPrice > currentPrice) {
      profit += nextPrice - currentPrice;
    }
  }

  return profit;
};

module.exports = maxProfit;