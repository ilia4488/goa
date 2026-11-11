def move_zeros(lst):
    zeros=[]
    nums=[]
    for i in lst:
        if i > 0:
            nums.append(i)
    for i in lst:
        if i == 0:
            zeros.append(i)
    for i in zeros:
        nums.append(i)
        
    return nums

def digital_root(n):
    while len(str(n))>1:
        temp=0
        for i in str(n):
            temp+=int(i)
        n=temp
            
    return n


def expanded_form(num):
    res = []
    digits = str(num)
    
    for i in range(len(digits)):
        if digits[i] != '0':
            res.append(digits[i] + '0' * (len(digits) - i - 1))
            
    return ' + '.join(res)



# 4
def delete_nth(order,max_e):
    res = []
    for i in order:
        if res.count(i) < max_e:
            res.append(i) 
    return res

def find_missing_letter(chars):
    letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    start = letters.index(chars[0])
    
    for i in range(len(chars)):
        if chars[i] != letters[start + i]:
            return letters[start + i]

def dig_pow(n, p):
    sum = 0
    for i in str(n):
        sum+=int(i)**p
        p+=1
    if sum%n==0:
        return sum//n
    else:
        return -1

def persistence(n):
    res = 0

    while len(str(n)) > 1:
        num = 1

        for i in str(n):
            num *= int(i)

        n = num
        res += 1

    return res

def shopping_spree(p, shop):
    total = 0
    first = 0
    second = 0
    res = 0

    for price in shop:
        total += price

        if price > first:
            second = first
            first = price
        elif price > second:
            second = price

        if total - first - second <= p:
            res += 1
        else:
            break

    return res

