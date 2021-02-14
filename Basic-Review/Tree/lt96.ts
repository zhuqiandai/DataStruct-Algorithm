/**
 * 二叉树的中序遍历
 */
function inorderTraversal(root: TreeNode | null): number[] {
  const travelPath = []
  const inorder = (root) => {
    if (root !== null) {
      inorder(root.left)
      travelPath.push(root.val)
      inorder(root.right)
    }
  }
  inorder(root)
  return travelPath
}
