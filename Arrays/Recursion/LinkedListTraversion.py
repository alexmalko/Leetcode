class Node:
    def __init__(self, data, next=None) -> None:
        self.data = data
        self.next = next


item1 = Node("dog")
item2 = Node("cat")
item3 = Node("rat")


item1.next = item2
item2.next = item3


def traverse(head):
    if head is None:
        return
    print(head.data)
    traverse(head.next)


traverse(item1)

print(item3.next)

head = Node("dog", Node("cat", Node("rat", None)))

traverse(head)
