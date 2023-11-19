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
	import { sortVowels } from '../../solve/231113-sort-vowels-in-a-string';
	import { countPalindromicSubsequence } from '../../solve/231114-unique-length-3-palindromic-subsequences';
	import { maximumElementAfterDecrementingAndRearranging } from '../../solve/231115-maximum-element-after-decreasing-and-rearranging';
	import { findDifferentBinaryString } from '../../solve/231116-find-unique-binary-string';
	import { minPairSum } from '../../solve/231117-minimize-maximum-pair-sum-in-array';
	import { maxFrequency } from '../../solve/231118-frequency-of-the-most-frequent-element';
	import { reductionOperations } from '../../solve/231119-reduction-operations-to-make-the-array-elements-equal';
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
<p>
	sortVowels: {sortVowels('Codewars')}
</p>
<p>
	countPalindromicSubsequence: {countPalindromicSubsequence('bbcbaba')}
</p>
<p>
	maximumElementAfterDecrementingAndRearranging: {maximumElementAfterDecrementingAndRearranging([
		4, 4, 4, 1, 10000
	])}
</p>
<p>
	findDifferentBinaryString: {findDifferentBinaryString(['111', '011', '001'])}
</p>
<p>
	minPairSum: {minPairSum([3, 5, 2, 3])}
</p>
<p>
	maxFrequency: {maxFrequency([1, 2, 4], 5)}
</p>
<p>
	reductionOperations: {reductionOperations([5, 1, 3])}
</p>
