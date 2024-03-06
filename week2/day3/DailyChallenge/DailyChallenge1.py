word = input("Please enter a word: ")

some_dict = {}

for item, letter in enumerate(word):
    if letter not in some_dict:
        some_dict[letter] = [item]
    else:
        some_dict[letter].append(item)

print(some_dict)