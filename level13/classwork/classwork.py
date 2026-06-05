# 0)
# name = "ilia"
# age = 15

# if age > 11 or name == "გიორგი":
#     print("გამარჯობა")
# else:
#     print("სალამი")

# # 1)
# age = int(input("enter age"))
# num = int(input("enter number"))

# if age > 20 and num == 20 % 2 == 0:
#     print("Congrats")
# else:
#     print("Try again")

# age = 15

# if age < 10:
#     print("youre child")
# elif age < 18:
#     print("youre a teenager")
# else:
#     print("youre a adult")

# 2) 
# მომხმარებელს შეაყვანინე რიცხვი.
# თუ რიცხვი მეტია 10-ზე — დაბეჭდე "დიდია"
# თუ ტოლია 10-ს — დაბეჭდე "ზუსტად 10"
# სხვა შემთხვევაში — დაბეჭდე "პატარაა"

# 3)
# მომხმარებელს შეაყვანინე ასაკი.
# თუ ნაკლებია 13-ზე — დაბეჭდე "ბავშვი"
# თუ ნაკლებია 18-ზე — დაბეჭდე "მოზარდი"
# სხვა შემთხვევაში — დაბეჭდე "ზრდასრული"
#2)
num = int(input("enter number"))

if num > 10:
    print("didia")
elif num == 10:
    print("zustad 10")
else:
    print("patara")

#3)
age = int(input("enter age: "))

if age < 13:
    print("bavshvi")
elif age < 18:
    print("mozardi")
else:
    print("adult")



