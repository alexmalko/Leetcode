def mult(n, a):
    if n == 1:
        return a
    return mult(n - 1, a) + a


print(mult(5, 5))
