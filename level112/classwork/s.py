def oddCount(n):
    return n // 2


def logical_calc(array, op):
    if op == "OR":
        return any(array)
    elif op == "AND":
        return all(array)
    elif op == "XOR":
        result = False
        for i in array:
            result = result != i
        return result

def powers_of_two(n):
    res = []
    for i in range(0,n+1):
        v = 2**i
        res.append(v)
        
    return res

def filter_string(st):
    res = ""
    for i in st:
        if i.isdigit():
            res += i

    return int(res)

def longest_word(string_of_words):
    splited = string_of_words.split(" ")
    res=""
    for i in splited:
        if len(i) >= len(res):
            res=i
        
        
    return res

def change_me(money):
    values = {
        "£5": 500,
        "£2": 200,
        "£1": 100,
        "50p": 50,
        "20p": 20
    }

    if money not in values:
        return money

    amount = values[money]

    if amount == 20:
        return "10p 10p"

    count = amount // 20
    remaining = amount % 20

    result = "20p " * count

    if remaining == 10:
        result += "10p"

    return result.strip()

def maskify(cc):
    four=cc[-4:]
    mask = "#" * (len(cc) - 4)
    
    
    return mask+four

def persistence(n):
    count=0
    while len(str(n))>1:
        total = 1
        for i in str(n):
            total*=int(i)
        n=total
        count+=1
    return count