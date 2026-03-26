import random
import string

print("=== Password Generator ===")

length = int(input("Enter password length: "))
use_digits = input("Include numbers? (y/n): ").lower()
use_symbols = input("Include symbols? (y/n): ").lower()

characters = string.ascii_letters

if use_digits == 'y':
    characters += string.digits
if use_symbols == 'y':
    characters += string.punctuation

password = ''.join(random.choice(characters) for _ in range(length))

print("Generated Password:", password)