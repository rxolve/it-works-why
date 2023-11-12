<script>
	import { demicalToBinary } from '../../solve/demical-to-binary';
	import { countDiv } from '../../solve/count-div';
	import { numberOfDiscIntersections } from '../../solve/number-of-disc-intersections';
	import { binarySearchTree } from '../../solve/binary-search-tree';
	import { binaryInsertionSort } from '../../solve/binary-insertion-sort';
	import { eliminateMaximum } from '../../solve/231107-eliminate-maximum-number-of-monsters';
	import { isReachableAtTime } from '../../solve/231108-determine-if-a-cell-is-reachable-at-a-given-time';
	import { countHomogenous } from '../../solve/231109-count-number-of-homogenous-substrings';
	import { restoreArray } from '../../solve/231110-restore-the-array-from-adjacent-pairs';
	import { numBusesToDestination } from '../../solve/231112-bus-routes';
</script>

<h1>Algorithm</h1>
<p>demicalToBinary: {demicalToBinary(1024)}</p>
<p>countDiv: {countDiv(11, 345, 17)}</p>
<p>numberOfDiscIntersections: {numberOfDiscIntersections([1, 1, 1])}</p>
<p>binarySearchTree: {binarySearchTree([4, 2, 6, 1, 3, 5, 7])}</p>
<p>binaryInsertionSort: {binaryInsertionSort([4, 2, 6, 1, 3, 5, 7])}</p>
<p>eliminateMaximum: {eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1])}</p>
<p>isReachableAtTime: {isReachableAtTime(2, 4, 7, 7, 6)}</p>
<p>countHomogenous: {countHomogenous('abbcccaa')}</p>
<p>
	restoreArray: {restoreArray([
		[2, 1],
		[3, 4],
		[3, 2]
	])}
</p>
<p>
	numBusesToDestination: {numBusesToDestination(
		[
			[1, 2, 7],
			[3, 6, 7]
		],
		1,
		6
	)}
</p>
