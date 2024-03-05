#ex1 
family = {}

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
for item in zip(keys , values):
    print(item)

#ex2
def ticket_price(age): #set value, and decided to use bool
    if age < 3: #if a person is under the age of 3, the ticket is free.
        return 0 
    elif 3 <= age <= 12: #if they are between 3 and 12, the ticket is $10.
        return 10
    else:               #if they are over the age of 12, the ticket is $15.
        return 15
    
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for memeber, age in family.items():
    price = ticket_price(age)
    print("{memeber} has to pay ${ticket_price} for a movie.")

print("The total cost for the family is {total_cost}.")

family_members = int(input("Enter the number of family members: "))
for i in range(family_members):
    name = input("Enter the name of family member {}: ".format(i+1))
    age = int(input("Enter the age of family member {}: ".format(i+1)))
    family[name] = age


#ex3
brand = {'name': 'Zara',
        'creation_date' : 1975,
        'creator_name' : 'Amancio Ortega Gaona',
        'type_of_clothes': [ 'men', 'women', 'children', 'home'],
        'international_competitors': ['Gap', 'H&M', 'Benetton'],
        'number_stores': 7000, 
        'major_color': {
                'France' : 'blue', 
                'Spain': 'red', 
                'US': ('pink', 'green')}
        }
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand['creation_date']

print(brand['international_competitors'][-1])

print(brand['major_color']['US'])

print('the amount of key value pairs in the dictionary is:', len(brand))

print('the keys of the dictionary is:', len(brand))

more_on_zara = {
        'creation_date': 1975, 
        'number_stores': 10000
}