import random

def choose_difficulty():
    print("\nSelect Difficulty Level:")
    print("1. Easy (1-50, 10 attempts)")
    print("2. Medium (1-100, 7 attempts)")
    print("3. Hard (1-500, 5 attempts)")
    
    while True:
        choice = input("Enter choice (1/2/3): ")
        if choice == '1':
            return 50, 10
        elif choice == '2':
            return 100, 7
        elif choice == '3':
            return 500, 5
        else:
            print("Invalid choice! Please select 1, 2, or 3.")

def play_game():
    max_range, max_attempts = choose_difficulty()
    number = random.randint(1, max_range)
    attempts = 0

    print(f"\nI have chosen a number between 1 and {max_range}. Try to guess it!")

    while attempts < max_attempts:
        try:
            guess = int(input(f"\nAttempt {attempts+1}/{max_attempts} - Enter your guess: "))
        except ValueError:
            print("⚠️ Please enter a valid number!")
            continue

        attempts += 1

        if guess < number:
            print("📉 Too low!")
        elif guess > number:
            print("📈 Too high!")
        else:
            print(f"\n🎉 Congratulations! You guessed it in {attempts} attempts!")
            break
    else:
        print(f"\n❌ Game Over! The correct number was {number}")

def main():
    print("🎮 Welcome to the Random Number Guessing Game!")

    while True:
        play_game()
        again = input("\nDo you want to play again? (yes/no): ").lower()
        if again != 'yes':
            print("\n👋 Thanks for playing! Goodbye!")
            break

if __name__ == "__main__":
    main()