#0) lists da sets shoris is gansxvavebaa rom set aris koleqcia mashi ori ertnairi monacemis shenaxva ar sheidzleba
#1)
#.add() amatebs setis boloshi elements
#.remove() shlis setis bolodan elements
#.clear() asuftavebs mtlian sets
#.union() or sets aertebs
#.difference() abrunebs pirvel setshi myof iset elementebs romlebic meore setshi ar arian
#2)dictionary aris cxrili da nishnavs rom mand aris key da value shenaxuli da rodesac daprintav dictionarys da miutiteb keys gamoitans values magalitad ese
# phones = {
#     "iphone": "700$",
#     "samsung": "750$",
#     "android": "500$"
# }

# print(phones["android"])
#3)
#.get()gadaecema key da abrunebs values
#.items() abrunebs yvela elements dictionarydan
#.keys() abrunebs yvela keys gasagebs dictionarydan
#.values() abrunebs yvela mnishvnelobas dictionarydan
#4)
phones = {
    "iphone": "700$",
    "samsung": "750$",
    "android": "500$",
    "Friends" : {
        "Friend1" :"nika",
        "Friend2" :"luka"
    }
}
print(phones.keys())
print(phones.items())
set1 = {1,2,3,4}
set2={3,4,5,6}
print(set1.union(set2))
print(set1.difference(set2))