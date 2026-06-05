dont_give_me_five=lambda start,end: len([x for x in range(start,end + 1) if "5" not in str(x)])

reverse_seq = lambda n: list(range(n, 0, -1))

get_count=lambda sentence: sum(1 for i in sentence if i in "aeiou")

filter_list=lambda l: [x for x in l if type(x) == int]

square_sum=lambda numbers: sum([x**2 for x in numbers])