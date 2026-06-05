# #1)
# def func(text):
#     result = ""
#     for i in range(len(text)):
#         if i%2==1:
#             result += text[i].upper()
#         else:
#             result += text[i]

#     return result
        

# print(func("hello world"))

# #2)
# def func2(list1):
#     result = []
    
#     for i in range(len(list1)):
#         result.append(list1[i] * i)
    
#     return result

# print(func2([2, 3, 21]))
# #3)
# def func3(list2):
#     result = []

#     for i in range(1, len(list2) - 1):
#         if list2[i] > list2[i-1] and list2[i] > list2[i+1]:
#             result.append(list2[i])

#     return result

# print(func3([3, 4, 3, 5, 4]))

# #4)
# def func4(text):
#     words = text.split()
#     result = {}
    
#     for i in words:
#         result[i] = len(i)
    
#     return result

# text = "ewhb whe hw sadbajs edkjanfk akdbjs"
# print(func4(text))

#5)
def func5(n):
    result = []

    for i in range(1, n+1):
        if i % 3 == 0:
            result.append("Three")
        else:
            result.append(i)


    return result
print(func5(10))