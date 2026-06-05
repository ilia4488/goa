# 0)
# and -> აბრუნებს True-ს მხოლოდ მაშინ, როცა ორივე პირობა True-ია
# or  -> აბრუნებს True-ს თუ მინიმუმ ერთი პირობა True-ია
# not -> აბრუნებს საპირისპირო მნიშვნელობას (True -> False, False -> True)


# 1)
print(5 > 3)      # True
print(10 == 10)   # True
print(7 != 2)     # True

print(5 < 3)      # False
print(10 != 10)   # False


# 2)
# საბოლოო შედეგი:
# False
print(False)


# 3)
# (True and False or True) and not (False and True or False) or (True and (False or True)) and (not False or False and True)

# ნაბიჯებად:
# True and False -> False
# False or True -> True
# False and True -> False
# False or False -> False
# not False -> True
# True and True -> True
# True and True -> True
# not False or False and True -> True or False -> True

# საბოლოო შედეგი:
print(True)