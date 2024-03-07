def sort_words(input_str):
    words = [word.strip() for word in input_str.split(',')]
    sorted_words = sorted(words)
    sorted_str = ', '.join(sorted_words)
    return sorted_str

input_sequence = input('Enter comma-separated words: ')
sorted_str = sort_words(input_str)
print('Sorted words: ', sorted_str)



