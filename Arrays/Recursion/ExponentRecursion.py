def exponent(a, n):
    base = a
    for i in range(n - 1):
        a *= base
    return a


def exponent_rec(a, n):
    if n == 1:
        return a
    return exponent_rec(a, n - 1) * a


print(exponent(5, 4))
print(exponent_rec(5, 4))
