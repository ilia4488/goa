def filter_list(l):
    newlist = []
    for i in l:
        if type(i) == int:
            newlist.append(i)
    return newlist

def square_sum(numbers):
    sum= 0
    for i in numbers:
        sum+=i**2
    return sum

def friend(x):
    return [name for name in x if len(name) == 4]

def lovefunc( flower1, flower2 ):
    if flower1%2==0 and flower2%2!=0 or flower2%2==0 and flower1%2!=0:
        return True
    else:
        return False
    
def disemvowel(string_):
    vowels = "AEIOUaeiou"
    result=""
    for i in string_:
        if i in vowels:
            result += i.replace(i,"")
        else:
            result += i
    return result