def nb_year(p0, percent, aug, p):
    year = 0
    gayofa = percent/100
    
    while p0<p:
        p0=int(p0+p0*gayofa+aug)
        year+=1
        
    return year



def likes(names):
    n = len(names)
    if n == 0:
        return "no one likes this"
    elif n == 1:
        return names[0] + " likes this"
    elif n == 2:
        return names[0] + " and " + names[1] + " like this"
    elif n == 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    else:
        return names[0] + ", " + names[1] + " and " + str(n-2) + " others like this"



def first_non_repeating_letter(s):
    res = {}
    for x in s:
        mini = x.lower()
        res[mini] = res.get(mini, 0) + 1
        
    for x in s:
        if res[x.lower()] == 1:
            return x
            
    return ""


def kebabize(s):
    result = ""

    for i in s:
        if i.isdigit():
            continue

        if i.isupper():
            if result!="":
                result += "-"
            result += i.lower()
        else:
            result += i

    return result

def string_transformer(s):
    return " ".join(s.swapcase().split(" ")[::-1])