# class Player:
#     pass
# player1=Player()
# player1.name = "Player1"
# player1.health = 100
# player1.level = 1
# player2=Player()
# print(player1.name,player1.level)

# # 0)Create a class called Student.
# # Create two objects: student1 and student2.
# # Give each student:
# # - A name
# # - An age
# # - A university
# # Print the information of both students.
# class Student:
#     pass
# Student1=Student()
# Student1.name="lasha"
# Student1.age=18
# Student1.university="university21"
# Student2=Student()
# Student2.name="nika"
# Student2.age=19
# Student2.university="university378"
# print(Student1.name,Student1.age,Student1.university)
# print(Student2.name,Student2.age,Student2.university)
# # 1)
# # Create a Book class.
# # Create three objects: book1, book2, book3.
# # Give each book the following attributes:
# # - title
# # - author
# # - pages
# # Print the information of each book.

# class Book:
#     pass
# book1=Book()
# book2=Book()
# book3=Book()

# book1.title="vepxistyaorani"
# book1.author="shota rustaveli"
# book1.pages=200

# book2.title="Frankenstein"
# book2.author="Mary Shelley"
# book2.pages=120

# book3.title="Brave New World"
# book3.author="by Aldous Huxley"
# book3.pages=150

# print(book1.title,book1.author,book1.pages)
# print(book2.title,book2.author,book2.pages)
# print(book3.title,book3.author,book3.pages)

# 2) შექმენით კლასი სახელად Human, რომელსაც გადასცემთ სახელს, ასაკს, გვარს და დაბადების ქვეყანას, ასევე დაამატეთ ფუნქცია სახელად myInfo, რომელიც გამოიტანს ინფორმაციას ადამიანზე
# 3) შექმენით კლასი სახელად Dog, რომელსაც გადასცემთ სახელს, ჯიშს, ასაკს და ფუნქციას სახელად bark, რომელიც გამოიტანს "bark bark"ს

class Human:
    def __init__(self,name,age,lastname,country):
        self.name=name
        self.age=age
        self.lastname=lastname
        self.country=country
    def myInfo(self):
        print(f'ჩემი სახელია {self.name} {self.lastname} მე ვარ {self.age} წლის დავიბადე {self.country}-ში')

human1=Human("gio","20","xucishvili","saqartvelo")
human1.myInfo()


class Dog:
    def __init__(self,name,specie,age):
        self.name=name
        self.specie=specie
        self.age=age
    def bark(self):
        print(f'{self.name}: bark bark')

dog=Dog("amy","Retriever","2")
dog.bark()