#ex1
my_name = "Dmitry"
my_age = 29
my_future_age = my_age + 123879

print (my_future_age)
print(mu_age +123879)

#Type casting

years_in_Israel = "one"

years_future = 2 + int(years_in_Israel)
print (years_future)


# ex2
first_name = "Dmitry"
last_name = "Ashavskiy"
print( f'My name is {first_name}, {last_name}')
print(f'My first name is (first_name+last_name)')

# ex3
#input function

age = int(input('what is your age?'))
print(f 'My favorite number is {type(age)}')

count = 0
if age > 18:
    print("You can come to the pub")
elif age == 21:
    print('You can drink at the pub!')
elif age <= 12:
    print('You are a child')
else:
    print('You can\'t come to the pub')



#ex3
    
    user_number = input (int('Give me a number'))

    if user_number % 3 == 0:
        print('Fizzz')
    elif user_number % 5 ==0:
        print('Buzzz')