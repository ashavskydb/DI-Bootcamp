import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Please specify either radius or diameter.")

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius}, diameter: {self.diameter}"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

circ1 = Circle(radius=3)
circ2 = Circle(diameter=10)

print(circ1)
print(circ2)

print("Area of circ1:", circ1.area)
print("Area of circ2:", circ2.area)

print("Are circ1 and circ2 equal?", circ1 == circ2)
print("Is circ1 greater than circ2?", circ1 > circ2)

circ3 = circ1 + circ2
print("Circle after addition:", circ3)

circles = [circ1, circ2, circ3]
circles.sort(reverse=True)
print("Sorted circles by radius:")
for circle in circles:
    print(circle)
