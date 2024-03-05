#DailyChallengeEX
import random
user_input = input("Please enter a string with exactly 10 characters: ")

if len(user_input) < 10:
        print("String not long enough")
elif len(user_input) > 10:
        print("String too long")
else: 
        print("Perfect string")

        print("First character:", user_input[0])
        print("Last character:", user_input[-1])
        
    
for letter in user_input:
        print(letter)

jumbled_string = list(user_input)
random.shuffle(jumbled_string)
jumbled_string = ''.join(jumbled_string)
print("Jumbled string:", jumbled_string)

