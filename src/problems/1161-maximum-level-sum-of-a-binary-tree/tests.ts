import { TreeNode } from "../../types/TreeNode.js";
import { maxLevelSum } from "./solution.js";

type Input = { root: TreeNode | null };
type Output = number;

const testCases: TestCase<Input, Output>[] = [
  {
    name: "example 1 - [1,7,0,7,-8]",
    input: {
      root: new TreeNode(1,
        new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
        new TreeNode(0)
      )
    },
    expected: 2
  },
  {
    name: "example 2 - [989,null,10250,98693,-89388,null,null,null,-32127]",
    input: {
      root: new TreeNode(989,
        null,
        new TreeNode(10250,
          new TreeNode(98693, new TreeNode(-32127), null),
          new TreeNode(-89388)
        )
      )
    },
    expected: 2
  },
  {
    name: "single node",
    input: { root: new TreeNode(42) },
    expected: 1
  },
  {
    name: "all negative values",
    input: {
      root: new TreeNode(-5,
        new TreeNode(-3, new TreeNode(-10), null),
        new TreeNode(-2)
      )
    },
    expected: 1
  },
  {
    name: "tie - smallest level wins",
    input: {
      root: new TreeNode(1,
        new TreeNode(2, new TreeNode(3), null),
        new TreeNode(2)
      )
    },
    expected: 2
  },
  {
    name: "left-skewed tree",
    input: {
      root: new TreeNode(1,
        new TreeNode(2,
          new TreeNode(3,
            new TreeNode(4, null, null),
            null
          ),
          null
        ),
        null
      )
    },
    expected: 4
  }
];

runTests({
  fn: ({ root }) => maxLevelSum(root),
  testCases
});
