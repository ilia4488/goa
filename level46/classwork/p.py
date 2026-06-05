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
    

def duplicate_count(text):
    text = text.lower() 
    count = 0
    for i in set(text):
        if text.count(i) > 1:
            count += 1
    return count

def is_valid_IP(string):
    parts = string.split(".")
    
    if len(parts) != 4:
        return False
    
    for part in parts:
        if not part.isdigit():
            return False
        
        num = int(part)
        
        if num < 0 or num > 255:
            return False
        
        if part != str(num):
            return False
    
    return True