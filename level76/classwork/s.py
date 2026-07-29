def count_sheep(n):
    s = ''
    for i in range(1, n+1):
        s += f'{i} sheep...'
    return s


def get_grade(s1, s2, s3):
    score = (s1 + s2 + s3) / 3
    
    if 90 <= score <= 100:
        return 'A'
    elif 80 <= score < 90:
        return 'B'
    elif 70 <= score < 80:	
        return 'C'
    elif 60 <= score < 70:
        return 'D'
    elif 0 <= score < 60:
        return 'F'
    


def remove_exclamation_marks(s):
    res=""
    for i in s:
        if i !="!":
            res+=i
    return res

def rental_car_cost(d):
    total=d*40
    if d >= 7:
        total-=50
    elif d >= 3:
        total-=20
    return total