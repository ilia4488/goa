def disemvowel(s):
    for i in "aeiouAEIOU":
        s = s.replace(i,'')
    return s

def odd_ball(arr):
    return arr.index("odd") in arr

def dont_give_me_five(start,end):
    return len([x for x in range(start,end + 1) if "5" not in str(x)])

def solution(text, ending):
    return text[-len(ending):] == ending

def xo(s):
    if s.lower().count("x") == s.lower().count("o"):
        return True
    else:
        return False





