def is_leap_year(year):
    return year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)\
    
def is_kiss(words):
    word=words.split(" ")
    count=len(word)
    for i in word:
        if len(i)>count:
            return "Keep It Simple Stupid"
        
    return "Good work Joe!"

def magic_sum(arr):
    sum=0
    
    for i in arr:
        if i%2==1 and "3"in str(i):
            sum+=i
    return sum

def digital_root(n):
    sum=0
    sum2=0
    
    for i in str(n):
        sum+=int(i)
    while len(str(sum))!=1:
        for i in str(sum):
            sum2+=int(i)
        sum=sum2
        sum2=0
    return sum

def get_middle(s):
    middle = len(s)//2
    
    if len(s) % 2 == 0:
        return s[middle - 1:middle + 1]
    else:
        return s[middle]