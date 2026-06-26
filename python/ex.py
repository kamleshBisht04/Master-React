


# ------------------------------------------
# ------------------------------------------
# FUNCTION AND MODULES
#  function define ,calling,parameter,argument,return the value ,default value,positonal args,keyword args

# def greet(name):
#     print(f"Welcome to you .. {name}")

# greet("kamlesh")
# greet("Deepak")
# greet("Suman")

# #  To calculate avarage 

# def avarage(num1,num2,num3):
#     sum= (num1+num2+num3)/3
#     print(f"The avarage of {num1},{num2},{num3} is {sum}")

# avarage(2,3,4)
# avarage(5,2,1)
# avarage(20,21,12)

# # -------------------------------
# # FUNCTIONAL ARGUMENT AND RETURN VALUE

# def add(a,b):
#     sum = a+b
#     print(f"The sum of two number {a} and {b} : {sum}")

# add(5,6)
# add(10,6)
# add(15,16)
# # ---------- Return the value from -------

# def add(a,b):
#     return a+b
#     # sum = a+b
#     # return sum

# print(f"The sum of two number is : {add(8,9)}")

# ----------------------------------

# def greet(name = "Guest"):
#     print(f"Welcome to you .. {name}")

# greet("kamlesh")
# greet() # default parameter 

# -------------------------------------

# def student(name ="Guest", age="20"):
#     print(f"Name:{name},Age:{age}")

# student(age=20,name="kamlesh")
# student()
# student("Deepak",36)

# ------------------------------
# LAMDA FUNCTION => one liner function in python anonymous inline function

# square = lambda num: num*num
# print(f"The square of number is {square(4)}")

# print(square(5))
# print(square(8))

# #  another lambda function
# add = lambda a,b: a+b

# print(add(5,6))
# print(f"The sum of two number is : {add(11,9)}")

# #  another example

# number = [1,2,3,4,5,6,7,8,9]
# square = list(map(lambda x: x**2,number))

# print(square)

# -------------------------------------
# Recursion in python

#  0 1 1 2 3 5 8 13 21
#  0 1 2 3 4 5 6  7  8

# def fibonacci(num):
#     # base case of recurssion
#     if(num==0 or num==1):
#         return num
#     return fibonacci(num-2) + fibonacci(num-1)

# print(f"Fibonacci seriese :  {fibonacci(8)}")
# print(f"Fibonacci seriese :  {fibonacci(6)}")

# --------------------------------
# for factorial using recursion

# 5 = 5 * 4 * 3 * 2 * 1
# n = n * factorial(n-1)

# def factorial(num):
#     if(num==0):
#         return 1
#     return num * factorial(num-1)

# print(f"The factorial of number is  :  {factorial(5)}")

# ------------------------------------------------------
# **************************************
# MODULES AND pip using external libraries

# --- Build in modules in python

# import math

# print(math.sqrt(4))
# print(math.ceil(5.91))
# print(math.floor(5.01))

# ----we can create and import our modules 

# import function_module

# print(function_module.factorial(5))

# print(function_module.greet('kamlesh'))

# *********************************
# EXTERNAL LIBRARIES USING PIP  => we can install third parties libraries 

# pip install request  (write in terminal to install)

# import requests

# response = requests.get("https://www.google.com")
# print(response.text)

#  pip install pandas

# ------------------------------------------
# FUNCTION SCOPE AND GLOBAL SCOPE AND LIFETIME

# def addation(num1,num2):
#     """ * num1 and num2 ,z are local variable 
#         * they are destyed after return the 
#         * global keyword is used to modify the global variable.
#     """
#     c= num1 +num2
#     z =5
#     global a
#     a =0


#     return c

# z = 10
# a=1
# print(addation(5,9))
# print(z)
# print(a)

# # docstring (writing function Documentation ......)
# print(addation.__doc__)

# -------------------------------------------
# ********************************

# DATA STRUCTURE  IN PYTHON
# list is mutable or orderd

# marks =[25,36,96,85,74,85,85,52,85,96]
# num=[5,2,3,4,5]

# mixed =[25,52.4,'kamlesh',True,False,56]

# print(marks)
# print(mixed)

# print(mixed[2])
# print(marks[0])
# print(marks[:3])   # slicing happend

# # ***********************************
# #  list methods
# marks.append(5)
# marks.insert(1,5)
# marks.extend(num)
# print("---------------")
# print(marks)
# marks.remove(5)  # remove the first occourance of element 5
# print(marks)
# marks.pop()
# marks.sort()
# marks.reverse()
# print(marks)

#  LIST COMPERHENSIONS 

# table = [ 5 * i for i in range(1,11)]
# print(table)

# #  old ways 
# table =[]
# for i in range(1, 11):
#     table.append(5 * i)

# print(table)

# #  square of first 10 numbers

# square = [i*i for i in range(1,11)]
# print(square)

# ---------------------------------
# TUPLES 
# ordered but immutable 

# my_tuple=(10,20,50,20,20)
# my_tuple1=(563, ) 

# print(my_tuple)
# print(my_tuple[0])
# print(my_tuple.count(20))
# print(my_tuple.index(50)) 
# print(type(my_tuple1))

# # tuple unpacking
# a,b,c,d,e= my_tuple
# print(a,b,c,d,e)

# --------------------------------
# # SETS
# #  unorder set of element unique collection,no duplicate

# fruits= {'apple',"Apple",'banana','peach','cheery','banana','peach','cheery'}
# print(fruits)

# # SETS METHOD
# fruits.add("graps")
# fruits.add("gaava")
# fruits.remove('gaava')
# fruits.pop()
# fruits.pop() 
# # fruits.remove('jay')  error becz not present
# fruits.discard('jay')
# # fruits.clear()
# print(fruits)

# # example 2

# a = {1,2,3,8,9}
# b={1,2,12,13,14,15,16}

# print(a.union(b))
# print(a.intersection(b))
# print(a.difference(b))

# -------------------------------

student ={"name":"kamlesh",1:"Delhi","age":28,"grade":'A'}
print(student)
#  accessing the dictonary via key
print(student["name"])
print(student[1])
print(student["age"])
print(student["grade"])

# modify the key value pair
student["age"]=32
print(student["age"])

# Adding new properties key value pair

student["city"]= "Ranikhet"
print(student)

#  common dictonary method 

print(student.keys())
print(student.values())
print(student.items())

student.pop("age")
student.clear()
print(student)

#  dictonary comperhension

square = {x : x**2 for x in range(6)}
print(square)

# list 
square = [x**2 for x in range(6)]
print(square)





































































  































        























