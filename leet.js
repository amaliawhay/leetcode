/*Instructions:
Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not 
move diagonally or move outside the boundary (i.e., wrap-around is not allowed).*/

//Find longest increasing path for each point

//Set directions (up, down, l, r)

//Check matrix value (newx, newy > x, y)

//Increase path (output) +1 with each iteration

var longestIncreasingPath = function (matrix) {
  if (matrix == null || matrix.length == 0) return 0;
  let m = matrix.length;
  let n = matrix[0].length;
  var longestIncreasingPath = 0;
};
