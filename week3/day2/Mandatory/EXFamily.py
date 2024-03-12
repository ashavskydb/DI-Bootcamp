class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulations with new member of your family")

    def is_18(self, name):
        for member in self.members:
            if member ['name'] == name:
                return member ['age'] >= 18
        return False
    
    def family_presentation(self):
        print(f"Family {self.last_name}:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

family_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]
my_family = Family("Smith", family_members)


my_family.born(name='John', age=0, gender='Male', is_child=True)
print("Is Sarah over 18?", my_family.is_18('Sarah'))
print("Is John over 18?", my_family.is_18('John'))
my_family.family_presentation()


class TheIncredibles(Family):
    def _init_(self, last_name, members):
        super()._init_(last_name, members)

        def use_power(self, name):
            for member in self.members:
                if member ['name'] == name:
                    return member ['age'] >= 18
                    print(f"{name} can use their power: {member['power']}")
                else:
                    raise ValueError(f"{name} is not 18 years old and cannot use their power.")
            
        def incredible_presentation(self):
            print('Here is our powerfull family')
            super().family.presentation()

incredibles_family = TheIncredibles(last_name="Incredibles", members=[
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
])

incredibles_family.incredible_presentation()
incredibles_family.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')
incredibles_family.incredible_presentation()
            

