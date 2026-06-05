
def sum_mul(n, m):
    return "INVALID" if n<=0 or m<=0 else sum(x for x in range(n, m, n))


def area_or_perimeter(length, width):
    if length == width:
        return length * width
    else:
        return 2 * (length + width)


def array(string):
    return " ".join(string.split(",")[1:-1]) or None












