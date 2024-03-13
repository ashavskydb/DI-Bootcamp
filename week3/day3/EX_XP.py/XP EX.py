# #Exercise1

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f"Currency({self.currency}, {self.amount})"
    
#     def __int__(self):
#         return self.amount
    
#     def __repr__(self):
#         return f'{str(self.amount)} {self.currency}'
    
#     def __add__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             return Currency(self.currency, self.amount + other.amount)
#         else:
#             return Currency(self.currency, self.amount + other)
        
#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             self.amount += other.amount
#         else:
#             self.amount += other
#         return self
       
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(repr(c1))

# print(c1 + 5)
# print(c1 + c2)

# print(c1)

# c1 += 5
# print(c1)

# c1 += c2
# print(c1)

# #ex2
# from func import add_and_print

# #ex3
# import string
# import random

# def random_string(length):
#     letters = string.ascii_letters     #I'm google it this function for random choice 
#     return ''.join(random.choice(letters) for _ in range(length))

# random_string = random_string(5)
# print(random_string)

# #ex4
# import datetime

# today_date = datetime.date.today()
# actual_datetime = datetime.datetime.now()

# print(f"Today is the {today_date.day}/{today_date.month}")


# #ex5

# import datetime

# now = datetime.datetime.now()

# specific_date = datetime.datetime(2022, 12, 31, 23, 59, 59)
# year = now.year
# month = now.month
# day = now.day
# hour = now.hour
# minute = now.minute
# second = now.second
# microsecond = now.microsecond

# def time_until_specific_date():
#     today_date = datetime.datetime.now()
#     time_left = specific_date - today_date
#     return time_left

# time_left = time_until_specific_date()
# print(f"Time left until {specific_date}: {time_left}")

# #ex6

# from datetime import datetime

# def minutes_lived(birthdate):
#     birth_datetime = datetime.strptime(birthdate, '%Y-%m-%d')
#     current_datetime = datetime.now()
#     time_difference = current_datetime - birth_datetime
#     time_lived = current_datetime - birth_datetime
#     minutes_lived = int(time_lived.total_seconds() / 60)
#     return minutes_lived

# birthdate = "1994-03-19"
# minutes = minutes_lived(birthdate)
# print(minutes_lived(birthdate))
        
# #ex7

# from faker import Faker
# import random


# fake = Faker()

# users = []

# def generate_user():
#     name = fake.name()
#     address = fake.address()
#     language_code = random.choice(['en', 'fr', 'es', 'de'])  
#     user_data = {
#         'name': name,
#         'address': address,
#         'language_code': language_code
#     }
#     users.append(user_data)

# for _ in range(10):
#     generate_user()

# for user in users:
#     print(user)
