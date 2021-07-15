def string_itr(str):
    result = 0
    for i in range(len(str)):
        result += 1
    return result


def string_rec(str):
    if str == "":
        return 0
    return 1 + string_rec(str[1:])


print(string_itr("hello"))
print(string_rec("hellow"))
