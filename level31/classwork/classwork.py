#listis informaciis shecvla sheizleba da tupesis ara eseigi list mutablea tuples imutable

# 2) შექმენით ფუბნქცია სახელად manual_count, რომელსაც გადაეცემა ლისთი და ელემენტი, უნდა გამოიტანოს ელემენტების რაოდენობა ლისთში
# 3) შექმენით ფუნქცია სახელად manual_find, რომელსაც გადაეცემა ლისთი და ელემენტი, უნდა გამოიტანოს ელემენტის ინდექსი ლისთში
# def manual_count(lst, element):
#     count = 0
#     for i in lst:
#         if i == element:
#             count += 1
#     return count

# print(manual_count([1, 2, 3, 2, 2, 4], 2))
# def manual_find(lst,element):
#     index = 0
#     for i in lst:
#         if i == element:
#             return index
#         index += 1
#     return -1
# print(manual_find(["apple", "banana", "cherry"], "cherry"))

students = ("Nika","Ilia","Dachi","lazare")
student1,student2,*others = students
print(student1,student2,others)