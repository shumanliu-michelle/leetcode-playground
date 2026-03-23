export function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set<number>([...nums1]);
    const set2 = new Set<number>([...nums2]);
    const ans1 = new Set<number>();
    const ans2 = new Set<number>();
    for(const num of nums1){
      if (!set2.has(num) && !ans1.has(num)) ans1.add(num);
    }
    for(const num of nums2){
      if (!set1.has(num) && !ans2.has(num)) ans2.add(num);
    }
    return [[...ans1], [...ans2]]
};
// Time O(n+m)
// Space O(n+m)