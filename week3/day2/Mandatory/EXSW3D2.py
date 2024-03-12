# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# all_cats = [Bengal, Chartreux, Siamese]

# sara_pets = Pets(all_cats)



#ex2

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self. age = age
    
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return self.weight *10
    
    def run_speed(self):
        return self.age *10

    def fight(self, other_dog):
        self_run_speed = self_run_speed() *self.weight
        other_run_speed = other_dog.run_speed() *other_dog.weight
        if self_run_speed > other_run_speed:
            return f"{self.name} won the fight!"
        elif self_run_speed < other_run_speed:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a tie!"
        
dog1 = Dog("Chuppy", 7, 23)
dog2 = Dog("Felex", 6, 19)
dog3 = Dog("Buddy", 4, 28)

print(dog1.bark())
print(f"{dog1.name} running speed is {dog1.run_speed()} km/h")
print(dog2.bark())
print(f"{dog2.name} running speed is {dog2.run_speed()}) km/h")
print(dog3.bark())
print(f"{dog3.name} running speed is {dog3.run_speed()}) km/h")



        


    
    
