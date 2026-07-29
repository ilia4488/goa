def to_camel_case(text):
    if not text:
        return ""
        
    text = text.replace("_", " ")
    text = text.replace("-", " ")
    text = text.split(" ")
    result = text[0]
    
    for i in text[1:]:
        result += i.capitalize()
        
    return result

def thanos_sort(arr):
    if arr == sorted(arr):
        return len(arr)
    mid=len(arr)//2
    if len(arr)%2!=0:
        mid+=1
    left = thanos_sort(arr[:mid])
    right = thanos_sort(arr[mid:])
    return max(left,right)
            

def move_zeros(lst):
    result = []
    count = 0
    
    for i in lst:
        if i != 0:
            result.append(i)
        elif i == 0:
            count += 1
            
    for x in range(0, count):
        result.append(0)
        
    return result

def open_or_senior(data):
    list=[]
    for i in data:
        age=i[0]
        handicap=i[1]
        if age>54 and handicap>7:
            list.append("Senior")
        else:
            list.append("Open")
    return list

def printer_error(s):
    after="nopqrstuvwxyz"
    error=0
    
    for i in s:
        if i in after:
            error+=1
            
    return f"{error}/{len(s)}"

def longest(a1, a2):
    both=a1+a2
    res=sorted(both)
    result="".join(set(res))
    sortedres=sorted(result)
    lastresult="".join(sortedres)
    return lastresult