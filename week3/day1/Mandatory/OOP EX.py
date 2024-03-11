# #ex1

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age


# def find_oldest_cat(Cat):
#     oldest_cat = None
#     max_age = -1
#     for cat in Cat:
#         if cat.age > max_age:
#             max_age = cat.age
#             oldest_cat = cat
#     return oldest_cat

# cat1 = Cat('Snowball', 5)
# cat2 = Cat('Mia', 3)
# cat3 = Cat('Barsik', 7)

# cats = [cat1, cat2, cat3]

# oldest_cat = find_oldest_cat(cats)

# print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old. ")


#ex2

# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f'{self.name} goes Wof!!')

#     def jump(self):
#         jump_height = self.height * 2
#         print(f"{self.name} jumps {jump_height} cm high!")

# davids_dog = Dog ("Rex", 50)

# print(f"David's dog's name: {davids_dog.name}")
# print(f"David's dog's height: {davids_dog.height} cm")

# davids_dog.bark()  
# davids_dog.jump() 

# sarahs_dog = Dog ("Teacup", 20)
# print(f"Sarah's dog's name: {sarahs_dog.name}")
# print(f"Sarah's dog's height: {sarahs_dog.height} cm")

# sarahs_dog.bark()
# sarahs_dog.jump()


# if davids_dog.height > sarahs_dog.height:
#     print("The bigger dog is", davids_dog.name)
# elif sarahs_dog.height > davids_dog.height:
#     print("The bigger dog is", sarahs_dog.height )
# else:
#     print ("Both dogs are of the same height.")


# #ex3
    
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

# stairway.sing_me_a_song()

#ex4

class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, *new_animal):
        if new_animal not in self.animals:
            self.animals.extend(new_animal)
            print(f"{new_animal} added to the zoo.")
        else:
            print(f"{new_animal} already exists in the zoo.")
    
    def get_animals(self):
        print("Animals in the Zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")
        
    def sort_animals(self):
        sorted_animals = []
        for animal in sorted(self.animals):
            first_letter = animal [0]
            if first_letter not in sorted_animals:
                sorted_animals[first_letter] = [animal]
            else:
                sorted_animals[first_letter].append(animal)

        print("Sorted animals in the zoo:")
        for key, value in sorted_animals.items():
            print(f"{key}: {value}")

    def get_groups(self):
        sorted_animals = self.sort_animals()
        print("Animal groups in the zoo:")
        for key, value in sorted_animals.items():
            print(f"{key}: {value}")

ramat_gan_safari = Zoo('Safari Ramat Gan')
ramat_gan_safari.add_animal('Turtle','Elephant','Emma','Apple')

print(ramat_gan_safari.animals)

