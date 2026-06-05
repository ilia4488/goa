# 0)კომენტარების დახმარებით დაწვრილებით ახსენით დღეს ნასწავლი ლისტის ფუნქციები
# 1)შექმენით სია, შემდეგ ამ სიის პირველი ელემენტი ჩაამატეთ ბოლოში. ხოლო საბოლოოდ დაგრჩებათ რომ გაქვთ 2 ერთნაირი ელემენტი, ამის გამო ამოშალეთ პირველი ელემენტი
# 2)ჩვენ გვჭირდება რომ გამოვიყენოთ იგივე სიის სახელი რაც გამოვიყენეთ წინა სავარჯიშოში, ამიტომაც წინა სავარჯიშოს სია მთლიანად გავწმინდოთ, შემდეგ ჩაამატეთ 2 ელემენტი და საბოლოოდ ამ 2 ელემენტს შორის კიდევ 1 ელემენტი
# 3)შექმენით რიცხვების სია.
# თუ ამ სიაში რიცხვი 10 არის მეხუთე ინდექსზე მაშინ ამ სიის ბოლო ელემენტი ამოშალეთ
# ხოლო თუ ამ სიაში რიცხვი 10 არ არის მეხუთე ინდექსზე მაშინ ამ სიის მეხუთე ენდექსზე ჩაამატეთ რიცხვი 10
# 4)შექმენით სია და თქვენი იდეებით ეცადეთ რომ გამოიტენოთ ყველა ნასწავლი სიის ფუნქცია(სულ 9 ცალი გვაქვს ნასწავლი)
#0)
# .sort() 
# # alagebs sias
# .clear() 
# # shlis mtlian sisas asuftavebs
# .reverse() 
# # atrialebs sias
# print(words2.index("apple")) 
# # idzaxis romel indeqsze dgas elementi
# .remove(6)
# # ahorebs im elements romelic mititebulia indexsis gareshe unda iyos mititebuli
# .insert(2, "pinnaple") 
# # indeqsi unda miutito da mere ras amateb eg brwyalebshi da magas daamatebs da tu mag adgilze sxva rame iyo is erti indeqsit win gadava
# 1)
# list = ["apple","pinnaple"]

# list.insert(2,"apple")
# list.remove("apple")

# print(list)
# 2)
# list = ["apple","pinnaple"]

# list.insert(2,"apple")
# list.remove("apple")
# list.clear()
# list.insert(0,"apple2")
# list.insert(1,"pinnaple2")
# list.insert(1,"water")
# print(list)

#3)
# nums = [1,2,3,4,5,9,8,10]

# if nums[5] == 10:
#     nums.pop()
#     print(nums)
# elif nums[5] != 10:
#     nums.insert(5,10)
#     print(nums)

#4)
# nums2 = [1,2,5,7,6,4,3,9]
# nums2.sort()
# nums2.reverse()
# print(nums2.index(7))
# nums2.remove(2)
# nums2.insert(4,2)
# print(len(nums2))
# nums2.append(8)
# nums2.pop()
# nums2.clear()
# print(nums2)