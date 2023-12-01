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
	import { garbageCollection } from '../../solve/231120-minimum-amount-of-time-to-collect-garbage';
	import { countNicePairs } from '../../solve/231121-count-nice-pairs-in-an-array';
	import { findDiagonalOrder } from '../../solve/231122-diagonal-traverse-ii';
	import { checkArithmeticSubarrays } from '../../solve/231123-arithmetic-subarrays';
	import { maxCoins } from '../../solve/231124-maximum-number-of-coins-you-can-get';
	import { getSumAbsoluteDifferences } from '../../solve/231125-sum-of-absolute-differences-in-a-sorted-array';
	import { largestSubmatrix } from '../../solve/231126-largest-submatrix-with-rearrangements';
	import { knightDialer } from '../../solve/231127-knight-dialer';
	import { numberOfWays } from '../../solve/231128-number-of-ways-to-divide-a-long-corridor';
	import { hammingWeight } from '../../solve/231129-number-of-1-bits';
	import { minimumOneBitOperations } from '../../solve/231130-minimum-one-bit-operations-to-make-integers-zero';
	import { arrayStringsAreEqual } from '../../solve/231201-check-if-two-string-arrays-are-equivalent';
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
<p>
	garbageCollection: {garbageCollection(['G', 'M'], [1])}
</p>
<p>
	countNicePairs: {countNicePairs([13, 10, 35, 24, 76])}
</p>
<p>
	findDiagonalOrder: {findDiagonalOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	])}
</p>
<p>
	checkArithmeticSubarrays: {checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])}
</p>
<p>
	maxCoins: {maxCoins([2, 4, 1, 2, 7, 8])}
</p>
<p>
	getSumAbsoluteDifferences: {getSumAbsoluteDifferences([2, 3, 5])}
</p>
<p>
	largestSubmatrix: {largestSubmatrix([
		[0, 0, 1],
		[1, 1, 1],
		[1, 0, 1]
	])}
</p>
<p>
	knightDialer: {knightDialer(3)}
</p>
<p>
	numberOfWays: {numberOfWays('SSPPSPS')}
</p>
<p>
	hammingWeight: {hammingWeight(1011)}
</p>
<p>
	minimumOneBitOperations: {minimumOneBitOperations(9)}
</p>
<p>
	arrayStringsAreEqual: {arrayStringsAreEqual(['ab', 'c'], ['a', 'bc'])}
</p>
