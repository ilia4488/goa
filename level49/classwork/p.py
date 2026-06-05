# numbers =[1,2,3,4,5,6,7,8,9]

# doubled = list(map(lambda x: x*2,numbers))

# print(doubled)

# map funqciit vaxdent rame moqmedebas listis yvela wevrze
# gadaecema funqcia da saiteracio cvladi
# dziritadad abrunebs igive sigrdzis sias

# filter funqcia piltravs sias im pirobis mixedvit rac gadaecema
# gadaecema funqcia da saiteracio cvladi
# dziritadad abrunebs mokle sias

# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# odds = list(filter(lambda x: x % 2 != 0, numbers))
# print(odds)



# numbers2 =[1,2,3,4,5,6,7,8,9]
# squares = list(map(lambda x: x**2,numbers2))
# print(squares)

# 4) შექმენით სახელების სია და filter-ით შეინახეთ მხოლოდ ის სახელები რომლებიც იწყება ა ასოთი

# names = ["anna","andria","gio"]
# anames = list(filter(lambda name: name[0]=="a",names))
# print(anames)

# def greet(*name):
#     return f"hello,{name}"

# print(greet("gio",'nika','saba'))

# def greetg(*names):
#     for i in names:
#         print(f"hello,{i}")

# greetg("nika","gio","luka")


# def carbrand(brand,*models):
#     for car in models:
#         print(f"{brand}: {car}")

# carbrand("mercedes","gls","maybach")

# def food_ranking(category, *foods):
#     counter = 1
#     for food in foods:
#         print(f"{category}: {counter} {food}")
#         counter += 1

# food_ranking("cezari", "lobiani", "xachapuri")

def car_builder(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

car_builder(brand="mercedes", popular=True, model="G-class")