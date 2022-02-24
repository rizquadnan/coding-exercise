function plusOne (digits) {
  const intPlusOne = BigInt(digits.join("")) + 1n;
    
  return Array.from(String(intPlusOne), num => Number(num));
}

module.exports = plusOne;