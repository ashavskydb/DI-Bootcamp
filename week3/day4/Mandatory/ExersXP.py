#ex1
# import random

# def get_words_from_file(file_path):
#     with open(file_path, 'r') as file:
#         words = file.read().split()
#         return words
        
# def get_random_sentence(length, words):
#     random_words = random.sample(words, length)
#     random_sentence = ' '.join(random_words)
#     return random_sentence.lower()

# def main():
#     print('Generate random sentences based on words from the file')
#     file_path = "week3/day4/Mandatory/sowpods.txt"
#     words = get_words_from_file(file_path)
  
#     while True:
#         try:
#             length = int(input('How long do you want the sentence to be [2-20 words]? '))
#             if length < 2 or length > 20:
#                 raise ValueError('Length must be between 2 and 20.')
#             break
#         except ValueError:
#             print('Error: enter valid info.')

#     sentence = get_random_sentence(length, words)
#     print('Random sentence:', sentence)

# if __name__ == '__main__':
#         main()


#ex2

# import json
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""

# data = json.loads(sampleJson)
# salary = data["company"]["employee"]["payable"]["salary"]

# print("Salary:",salary)

# data["company"]["employee"]["birth_date"] = "1990-01-01"

# updatedJson = json.dumps(data,indent=4)
# print(updatedJson)

# filename = "updated_data.json"

# with open (filename, "w") as json_file:
#     json.dump(data, json_file, indent=4)

# print(f'Dictionary saved as JSON to {filename}')
