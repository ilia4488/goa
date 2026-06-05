def disemvowel(string_):
    return ''.join(x for x in string_ if x.lower() not in 'aeiou')

def reverse_seq(n):
    return list(range(n, 0, -1))

def smash(words):
    return " ".join(words)

def invert(lst):
    return [-x for x in lst]

def dont_give_me_five(start,end):
    return len([x for x in range(start,end+1) if "5" not in str(x)])