from anagram_checker import AnagramChecker

def get_user_input():
    word = input("Enter a word (type 'exit' to quit): ")
    if len(word.split()) > 1:
        print("Enter only one word.")
        return False, ''
    if not word.isalpha():
        print("Enter only alphabetic characters.")
        return False, ''
    return True, word

def main():
    checker = AnagramChecker('week3/day5/sowpods2.txt')

    while True:
        is_valid, word = get_user_input()

        if word.lower() == 'exit':
            print("Exiting...")
            break


        word = word.strip()
        if checker.is_valid_word(word):
            if checker.is_valid_word(word):
                print(f"YOUR WORD: \"{word}\"")
                print("This is a valid English word")
                anagrams = checker.get_anagrams(word)
                print("Anagrams for you word:",",".join(anagrams))
            else:
                print(f"\"{word}\"is not a valid English word.")

if __name__ == "__main__":
    main()
              