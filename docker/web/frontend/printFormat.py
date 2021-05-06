student = ["F6131051921", "M6130194821", "M6130203821", "M6130301621", "M6130308021", "M6131307621"]

dev = [11, 30, 49, 68, 82, 84, 88, 90, 93, 95, 98]
test = [10, 26, 28, 40, 48, 66, 70, 86, 99, 118, 120]

# for s in student :
#     i= 0
#     file = open("text_script.txt", 'r', encoding="utf8")
#     for l in file :
#         if i not in dev and i not in test :
#             order = '0'*(4-len(str(i))) + str(i)
#             print(f"{s}_{order} {l.strip()}")
#         i+=1

# for s in student :
#     i= 0
#     file = open("text_script.txt", 'r', encoding="utf8")
#     for l in file :
#         if i in dev :
#             order = '0'*(4-len(str(i))) + str(i)
#             print(f"{s}_{order} {l.strip()}")
#         i+=1

file = open("text_script.txt", 'r', encoding="utf8")
for l in file :
     print(f"\"{l.strip()}\",")