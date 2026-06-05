def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 == 1:
            return i
        
def DNA_strand(dna):
    result = ""
    for i in dna:
        if i == "A":
            result += "T"
        elif i == "T":
            result += "A"
        elif i == "C":
            result += "G"
        elif i == "G":
            result += "C"
    return result

def high_and_low(numbers):
    nums = numbers.split()
    new_nums = []

    for num in nums:
        new_nums.append(int(num))

    return str(max(new_nums)) + " " + str(min(new_nums))

def solution(s):
    result = ""

    for i in s:
        if i.isupper():
            result += " "

        result += i

    return result

def max_diff(lst):
    if len(lst) <= 1:
        return 0

    return max(lst) - min(lst)