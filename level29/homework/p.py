def odd_ball(arr):
    return arr.index("odd") in arr

def dont_give_me_five(start,end):
    sum = 0
    for i in range(start,end+1):
        if "5" not in str(i):
            sum += +1
    return sum

def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return "yes, ascending"
    elif arr == sorted(arr, reverse=True):
        return "yes, descending"
    else:
        return "no"
    
def get_count(sentence):
    vowels="aeiou"
    sum=0
    for i in sentence:
        if i in vowels:
            sum+=1
    return sum

def duplicate_encode(word):
    word = word.lower()
    result = ""
    
    for char in word:
        if word.count(char) > 1:
            result = result + ")"
        else:
            result = result + "("
            
    return result