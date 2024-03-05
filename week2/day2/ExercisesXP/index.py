# #ex1

# # my_fav_numbers =set(410,13,7,19)
# # my_fav_numbers.add(34,68)
# # my_fav_numbers.remove("last number")
# # friend_fav_numbers =set(11,23,14,16)
# # our_fav_numbers =my_fav_numbers.union(friend_fav_numbers)
# # print(our_fav_numbers)


# #ex2
# #No, we cant edit, cause created tuple with their contents cannot be changed.

# #ex3

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# count_apples = basket.count("Apples")
# basket.clear()
# print(basket)

# #ex4
# #  Integers as whole numbers meaning that they do not have any fractional parts.
# # Float or floating point numbers possess a fixed specific number of bits which are arranged for the whole number and the fractional portion of the number.

# sequence_list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

# # strings, using the uniform, the append() function

# #ex5
# for i in range(1, 20):
#     print(i)

# for i in range(1, 20):
#     if i % 2 == 0:
#         print(i)

# #ex6
# my_name = "Dmitry"
# user_name = ""
# while user_name != my_name:
#     user_name= input ("Enter your name")

# #ex7
#     favorite_fruits_str = input("Please enter your favorite fruit(s) and separate the fruits with a single space")
#     favorite_fruits_list = favorite_fruits_str.split()
    
#     user = input("Enter the name of a fruit: ")
#     if user.lower() in favorite_fruits_list:
#         print("You chose one of your favorite fruits! Enjoy!")
#     else:
#         print("You chose a new fruit. I hope you enjoy!")

# #ex8
#     toppings = input("Enter a series of pizza toppings")
#     for x in toppings:
#         if toppings.lower == "quit":
#             break
# print("Your pizza will have the following toppings:", toppings)

# basic_price = 10
# topping_price = 2.5

# print("Toppings on the pizza:")
# for topping in toppings:
#     print("- " + topping)

# total_price = 10 + 2.5 * len(toppings)
# print("The total price for your pizza is ${total_price:}")

# #ex9
# def ticket_price(age): #set value, and decided to use bool
#     if age < 3: #if a person is under the age of 3, the ticket is free.
#         return 0 
#     elif 3 <= age <= 12: #if they are between 3 and 12, the ticket is $10.
#         return 10
#     else:               #if they are over the age of 12, the ticket is $15.
#         return 15
    
# num_family= int(input("Who wants a ticket? "))
# total_price = 0
# for family_member in range(1, num_family + 1):
#         age = int(input("Enter the age of person {family_member}: "))
#         total_price += ticket_price

#         print("Total ticket price for the family:", total_price)



# #ex10
#         sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
#         finished_sandwiches = []
#         while sandwich_orders != []
#             first_sandwich = sandwich_orders [0]
#             if first_sandwich != "Pastrami sandwich":
#                 finished_sandwiches.append(first_sandwich)
#             sandwich_orders.pop(0)
#             print(finished_sandwiches)
#             print(sandwich_orders)




