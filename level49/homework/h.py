# 1) შექმენი სია რიცხვებით და გამოიყენე map, რომ ყველა რიცხვი გააორმაგო.

# 2) შექმენი სია და გამოიყენე map, რომ ყველა სიტყვა გადაიყვანო დიდი ასოებით.

# 3) შექმენი რიცხვების სია და გამოიყენე filter, რომ სიიდან აირჩიო მხოლოდ ლუწი რიცხვები.

# 4) შექმენი ფუნქცია, რომელიც იღებს ნებისმიერ რაოდენობის რიცხვს *args-ით და აბრუნებს მათ ჯამს.

# 5) შექმენი ფუნქცია, რომელიც იღებს **kwargs-ს და ბეჭდავს ყველა key-ს და value-ს. 
nums = [1,2,3,4,5,6,7,8,9]
doubled = list(map(lambda x: x*2,nums))
print(doubled)

names=["anna","gio","nika"]
upn = list(map(lambda x: x.upper(),names))
print(upn)

nums2=[1,2,3,4,5,6,7,8,9]
odd = list(filter(lambda x: x%2!=0 ,nums2))
print(odd)


def sumnum(*args):
    sum=0
    for i in args:
        sum+=i
    return sum
print(sumnum(1,2,3))

def func(**kwargs):
    for key,value in kwargs.items():
        print(key,value)

func(name="ilia", age=15,)

