# fibonacci memoization
def fib(n, cache=None):
    if cache is None:
        cache = {}
    if n in cache:
        return cache[n]
    if n < 2:
        return n
    else:
        result = fib(n-2, cache) + fib(n-1, cache)
        cache[n] = result
        return result


print(fib(100))
