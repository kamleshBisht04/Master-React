age = int(input("Enter age: "))

if age < 18:
    raise ValueError("Age must be at least 18.")

print("Eligible")   