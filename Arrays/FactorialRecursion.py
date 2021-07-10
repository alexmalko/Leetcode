def factorial(n):
    sum = 1
    for item in range(1, n + 1):
        sum *= item
    return sum


def factorial1(n):
    sum = 1
    while n >= 1:
        sum *= n
        n -= 1
    return sum


def factorial2(n):
    if n <= 1:
        return 1
    else:
        return n * factorial2(n - 1)


print(factorial(4))
print(factorial1(4))
print(factorial2(4))
