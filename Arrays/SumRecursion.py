def sum(list):
    sum = 0
    for val in list:
        sum += val
    return sum


def sum_rec(list):
    if len(list) == 0:
        return 0
    return list[0] + sum_rec(list[1:])


print(sum([1, 2, 5]))
print(sum_rec([1, 2, 5]))
