function factorial(n) {
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[0] = dp[1];
    dp[1] = i * dp[1];
  }
  return dp[1];
}
