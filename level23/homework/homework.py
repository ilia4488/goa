# 0)
# and - orive piroba unda iyos True
# or - ert-erti piroba მაინც unda iyos True
# not - აბრუნებს საპირისპირო მნიშვნელობას


# 1)
print(5 > 3)      # True
print(10 == 10)   # True
print(7 != 2)     # True

print(5 < 3)      # False
print(10 != 10)   # False
print(7 == 2)     # False


# 2)
print(True and True)     # True
print(False or True)     # True
print(not False)         # True

print(True and False)    # False
print(False or False)    # False
print(not True)          # False


# 3)
# (True and not False) or (False and True) or (not (False or False) and True) and (True or not (False and True))

# True and True = True
# False and True = False
# False or False = False
# not False = True
# True and True = True
# False and True = False
# not False = True
# True or True = True

# Sabolo pasuxi:
print(True)


# 4)
# (15 + 5 > 10 * 2 and 50 / 5 == 10 or 7 - 2 >= 6)
# and not (20 < 10 + 15 and 9 / 3 == 2 or 8 - 3 < 2)
# or (30 / 3 == 10 and (14 - 4 > 5 + 5 or 6 * 2 == 11))
# and (40 == 39 + 1 or 12 / 4 != 3)

# 20 > 20 = False
# 10 == 10 = True
# 5 >= 6 = False

# False and True = False
# False or False = False

# 20 < 25 = True
# 3 == 2 = False
# 5 < 2 = False

# True and False = False
# False or False = False
# not False = True

# 10 == 10 = True
# 10 > 10 = False
# 12 == 11 = False

# False or False = False
# True and False = False

# 40 == 40 = True
# 3 != 3 = False

# True or False = True

# False and True = False

# False and True = False
# False or False = False

# Sabolo pasuxi:
print(False)