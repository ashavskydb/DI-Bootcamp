import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck:
    def __init__(self):
        self.cards = []
        self.populate_deck()
        self.shuffle()

    def populate_deck(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        for suit in suits:
            for value in values:
                self.cards.append(Card(suit, value))

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            print("Deck is empty!")
            return None
        return self.cards.pop()


deck = Deck()
print("Shuffled deck:")
for card in deck.cards:
    print(f"{card.value} of {card.suit}")
print("\nDealing 5 cards:")
for _ in range(5):
    dealt_card = deck.deal()
    if dealt_card:
        print(f"Dealt: {dealt_card.value} of {dealt_card.suit}")
print("\nRemaining cards in the deck:")
for card in deck.cards:
    print(f"{card.value} of {card.suit}")
    