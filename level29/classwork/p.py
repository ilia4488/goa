def is_divisible(n,x,y):
    if n % x == 0 and n % y == 0:
        return True
    else:
        return False

def better_than_average(class_points, your_points):
    avarage = sum(class_points) / len(class_points)
    
    if your_points > avarage:
        return True
    else:
        return False
    
spin_words = lambda sentence: " ".join(word[::-1] if len(word) >= 5 else word for word in sentence.split())

def solution(number):
    result = 0

    if number < 0:
        return 0

    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            result = result + i

    return result

def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 == 1:
            return i