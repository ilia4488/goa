def is_square(n):  
    if n < 0:
       return False
    elif (n ** (0.5)) % 1 == 0:
       return True
    else:
       return False
    
def reverse_seq(n):
    return list(range(n, 0, -1))

def solution(text, ending):
    return text[-len(ending):] == ending

def dont_give_me_five(start, end):
    count = 0
    for i in range(start, end + 1):
        if "5" not in str(i):
            count = count + 1
    return count

def xo(s):
    if s.lower().count("x") == s.lower().count("o"):
        return True
    else:
        return False
    

def disemvowel(string_):
    vowels = "aeiouAEIOU"
    result = ""
    for i in string_:
        if i not in vowels:
            result = result + i
    return result

def odd_ball(arr):
    i=arr.index('odd')
    if i in arr:
        return True
    else:
        return False
    
def descending_order(num):
    list = []
    result = ""
    for i in str(num):
        list.append(int(i))
        
    numbers = sorted(list)[::-1]
    for i in numbers:
        result = result + str(i)
    return int(result)

def filter_list(l):
    result = []
    for i in l:
        if type(i) == int:
            result.append(i)
    return result

def square_digits(num):
    result = ""
    for digit in str(num):
        result += str(int(digit) ** 2)
    return int(result)


