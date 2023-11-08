/*
You are given four integers sx, sy, fx, fy, and a non-negative integer t.

In an infinite 2D grid, you start at the cell (sx, sy). Each second, you must move to any of its adjacent cells.

Return true if you can reach cell (fx, fy) after exactly t seconds, or false otherwise.

A cell's adjacent cells are the 8 cells around it that share at least one corner with it. You can visit the same cell several times.
*/
export const isReachableAtTime = (
	sx: number,
	sy: number,
	fx: number,
	fy: number,
	t: number
): boolean => {
	if (fx == sx && fy == sy) return t !== 1;

	const dx = Math.abs(sx - fx);
	const dy = Math.abs(sy - fy);

	const maxDiff = Math.max(dx, dy);

	if (maxDiff > t) return false;

	return true;
};
