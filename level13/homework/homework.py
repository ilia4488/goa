# 0)

# "if" ტესტავს პირობას. თუ პირობა მართალია, შესრულდება კოდი მის შიგნით.
# "elif" ტესტავს ახალ პირობას მხოლოდ მაშინ, როცა ყველა წინა if/elif პირობა არ იყო მართალი.
# "else" პირობა არ აქვს ასრულებს კოდს, თუ ყველა წინა if და elif პირობა მცდარია.

# 1)

# if-else გამოიყენება მხოლოდ ორ ვარიანტში: პირობა მართალია თუ არ არის.
# if-elif-else გამოიყენება მრავალი პირობისთვის, როდესაც შესაძლებელია რამდენიმე არჩევანი.

# 2)

# "break" გაწყვეტს ყველაზე ახლოს მდგომ loop-ს (ციკლს).

#3)
age = int(input("enter age: "))

if age < 12:
    print("ბავშვი")
elif age < 19 and age > 13:
    print("მოზარდი")
else:
    print("ზრდასრული")

#4)
Mark = int(input("enter your mark 0-100 "))

if Mark > 89 and Mark < 101:
    print("A")
elif Mark > 79 and Mark < 90:
    print("B")
elif Mark > 69 and Mark < 80:
    print("C")
elif Mark > 59 and Mark < 70:
    print("D")    
else:
    print("F")