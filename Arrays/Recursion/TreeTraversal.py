# DFS

class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.left = None
        self.right = None


def preorder_print(root, path=""):
    """Node--->Left->right"""
    if root:
        path += str(root.data) + "-"
        path = preorder_print(root.left, path)
        path = preorder_print(root.right, path)
    return path


def inorder_print(root, path=""):
    """Left-Node-Right"""
    if root:
        path = inorder_print(root.left, path)
        path += str(root.data) + "-"
        path = inorder_print(root.right, path)
    return path


def postorder_print(root, path=""):
    """Left-Right-Node"""
    if root:
        path = postorder_print(root.left, path)
        path = postorder_print(root.right, path)
        path += str(root.data) + "-"
    return path


root = Node("F")
root.left = Node("D")
root.left.left = Node("B")
root.left.left.left = Node("A")
root.left.left.right = Node("C")
root.left.right = Node("E")
root.right = Node("I")
root.right.left = Node("G")
root.right.left.right = Node("H")
root.right.right = Node("J")


print("Preorder", preorder_print(root))
print("Inorder", inorder_print(root))
print("Postorder", postorder_print(root))
