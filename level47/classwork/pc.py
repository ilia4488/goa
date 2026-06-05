vaporcode = lambda s: "  ".join(x.upper() for x in s if x != " ")
solution = lambda number: 0 if number < 0 else sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)
find_it=lambda seq: sum(set([x for x in seq if seq.count(x) % 2 == 1]))
duplicate_encode = lambda word: "".join("(" if word.lower().count(x) == 1 else ")"for x in word.lower())