# 0)
# type() ფუნქციას ვიყენებთ იმის გასაგებად თუ რა ტიპის მონაცემია ცვლადში.


# 1)
num = int("123")
print(type(num))


# 2)
a = int(3.7)
b = float(3.7)

print(type(a))
print(type(b))


# 3)
age = "25"

if type(age) == str:
    age = int(age)

print(age)
print(type(age))


# 4)
print("10" == 10)


# 5)
num = int("5")

print(num > 3)