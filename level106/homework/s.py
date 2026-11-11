def check_alive(health):
    if health > 0:
        return True
    else:
        return False

def capitalize(s):
    even = ""
    odd = ""

    for i in range(len(s)):
        if i % 2 == 0:
            even += s[i].upper()
            odd += s[i]
        else:
            even += s[i]
            odd += s[i].upper()

    return [even, odd]

def dna_to_rna(dna):
    res=""
    for i in dna:
        if i == "T":
            res+="U"
        else:
            res+=i
        
    return res

