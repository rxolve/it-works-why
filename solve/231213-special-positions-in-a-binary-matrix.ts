/*
Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).
*/

export function numSpecial(mat: number[][]): number {
  const rows = mat.length;
  const cols = mat[0].length;
  const rowCounts = new Array(rows).fill(0);
  const colCounts = new Array(cols).fill(0);
  for (let row = 0; row < rows; row++) {
    let rowCount = 0;
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 1) {
        rowCount++;
      }
    }
    rowCounts[row] = rowCount;
  }
  for (let col = 0; col < cols; col++) {
    let colCount = 0;
    for (let row = 0; row < rows; row++) {
      if (mat[row][col] === 1) {
        colCount++;
      }
    }
    colCounts[col] = colCount;
  }
  let specialCount = 0;
  for (let row = 0; row < rows; row++) {
    const rowCount = rowCounts[row];
    if (rowCount !== 1) {
      continue;
    }
    for (let col = 0; col < cols; col++) {
      const colCount = colCounts[col];
      if (colCount !== 1) {
        continue;
      }
      if (mat[row][col] === 1) {
        specialCount++;
      }
    }
  }
  return specialCount;
}
