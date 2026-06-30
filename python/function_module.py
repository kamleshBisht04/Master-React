def fibonacci(num):
    # base case of recurssion
    if(num==0 or num==1):
        return num
    return fibonacci(num-2) + fibonacci(num-1)

def greet(name):
    print(f"Welcome to you  {name}")

def factorial(num):
    if(num==0):
        return 1
    return num * factorial(num-1)


