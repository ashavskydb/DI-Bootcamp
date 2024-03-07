# #ex1
# def display_message():
#     print('We are learn Python')

# display_message()
# display_message()

# #ex2
# def favorite_book(title):
#     print("One of my favorite books is", title)

# favorite_book ('1984')

#ex3
# def describe_city(city, country):
#     print(f"{city} is in {country}")

# describe_city("Tbilisi", "Georgia")

#ex4
# import random

# def random_number_generate(n):
#     if n < 1 or n >100:
#         return "Enter number only between 1 and 100."
#     else:
#         return random.randrange(1,101)
    
# input_number = int(input("Enter number only between 1 and 100."))
# random_number = random_number_generate(input_number)
# print("Random number:", random_number)

# if random_number == input_number:
#     print("Success!")
# else:
#     print("Fail")

#ex5

# def make_shirt(size = "Large", text = "I love Python"):
#     print(f"The size of the shirt is {size} and the text is {text}")

# make_shirt ()
# make_shirt ("M")
# make_shirt (text= "Bootcamp")

#ex6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magician_names):
#     for i in range(len(magician_names)):
#         print(magician_names[i])

# def make_great(magician_names):
#     for i in range(len(magician_names)):
#      magician_names[i] += " the Great"  

# make_great(magician_names)

# show_magicians(magician_names)

#ex7
import random
def get_random_temp():
    return random.randint(-10, 40)

random_value = get_random_temp()
print("Random return value:", random_value)


def main():
    def get_random_temp():
        print(f"The temperature right now is (temperature) degrees Celsius")

random_temperature = get_random_temp()
print("Random temperature:", random_temperature)

if random_temperature < 0:
    print('Brrr, thats freezing! Wear some extra layers today')
elif 0 <= random_temperature < 16:
    print('Quite chilly! Dont forget your coat')
elif 16 <= random_temperature < 24:
    print("The weather is pleasant outdoors. Make the most of it!")
elif 24 <= random_temperature < 32:
    print("It's balmy out there. Ideal for outdoor activities!")
elif 32 <= random_temperature < 40:
    print ("The temperature outside is high. Remember to keep hydrated and stay cool.")

