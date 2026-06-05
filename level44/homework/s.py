
# #1)
# try aris gasinjva da except garda eseigi tu piroba sworad iqneba try tu arasworad exceptze gadava da except shecdomebistvisacaa
# #2)
# finally yoveltvis shesruldeba
#3)
ulist = input("enter list of numbers: ")
nums = ulist.split()

try:
    nums = [int(n) for n in ulist]
    print("shemotanili ricxvebia: ", nums)
except ValueError:
    print("სიაში არასწორი მონაცემია")
#4)
list1= [1,3,4,25,245,5,74]

try:
    unum = int(input("enter index: "))
    list1.pop(unum)
    print(list1)
except IndexError:
    print("ინდექსი არ არსებობს")
#5
try:
    age = int(input("enter age: "))
    print("your age is", age)
except ValueError:
    print("არასწორი ასაკი")