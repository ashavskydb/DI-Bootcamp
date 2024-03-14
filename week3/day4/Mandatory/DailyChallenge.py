import os 

class text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        word_list = self.text.split()
        word_count = word_list.count(word)
        if word_count == 0:
            return None
        else:
            return word_count
    
    def most_common_word(self):
        words = self.text.split()
        word_count = {}

        for word in words:
            if word in word_count:
                word_count[word] += 1
            else:
                word_count[word] = 1
        most_common = max(word_count, key=word_count.get)
        return most_common
    
    def unique_words(self):
        words = self.text.split()
        return set(words)

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)
    
text_instance = text.from_file('week3/day4/Mandatory/the_stranger.txt')

text_string = "A good book would sometimes cost as much as a good house."
text_instance = text(text_string)

print(text_instance.word_frequency("good"))
print("Most common word(s):", text_instance.most_common_word())
print("Unique words:", text_instance.unique_words())


    
    

