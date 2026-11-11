def multiples(a: int, b: int, limit: int) -> list[int]:
    result = []
    for i in range(1,limit+1):
        if i%a==0 and i%b==0:
            result.append(i)
    return result


def find_next_square(sq):
    cube=int(sq*0.5)
    if cube*cube==sq:
        return (cube+1)**2
    else:
        return -1


def sum_of_minimums(numbers):
    return sum(min(i) for i in numbers)


def max_tri_sum(numbers):
    numbers=list(set(numbers))
    numbers.sort()
    return numbers[-1]+numbers[-2]+numbers[-3]


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

