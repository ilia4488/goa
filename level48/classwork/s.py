# 1) შემქენით პროგრამა რომელიც მომხმარებელს შემოატანინებს ორ რიცხვს და ყოფს ერთამენთზე. გამოიყენეთ try / except რომ პროგრამა არ გაჩერდეს თუ მომხმარებელმა შემოიტანა 0

# 2) შექმენით პროგრამა რომელიც მომხმარებელს სთხოვს რიცხვის შეყვანას. თუ მომხმარებელმა რიცხვის ნაცვლად ტექსტს შეიყვანს გამოიტანეთ შესაბამისი მესიჯი.

# 3) შექმენით სია და მომხმარებელს შემოატანინეთ ინდექსი. გამოიყენეთ try და except, რათა პროგრამამ error არ გამოიტანოს თუ ინდექსი სიაში არ არსებობს

# 4) შექმენით პროგრამა რომელიც მომხმარებელს სთხოვს რიცხვს და შემდეგ გამოაქვს მისი კვადრატი. გამოიყენეთ try და except, რათა თავიდან აიცილოთ არასწორი მონაცემის შეყვანა


# try:
#     num1 = int(input("enter first number: "))
#     num2 = int(input("enter second number: "))
#     print(num1/num2)
# except ValueError:
#     print("enter valid value")
# except ZeroDivisionError:
#     print("you cant divide numbers by 0")
# except NameError:
#     print("incorect name")
# except IndexError:
#     print("out of index")

#1)
try:
    num1 = int(input("enter first number: "))
    num2 = int(input("enter second number: "))
    result = num1/num2
    print(result)
except ZeroDivisionError:
    print("you cant divide numbers by 0")
# #2)
try:
    num = int(input("enter number"))
except ValueError:
    print("this is not number: ")
#3)
list1 = ["car","cat","dog","BMW"]
try:
    index1 = int(input("enter index: "))
    print(list1[index1])
except IndexError:
    print("youre out of index use lower index")
#4)
try:
    numq = int(input("enter number: "))
    print(numq**2)
except ValueError:
    print("this is not number")