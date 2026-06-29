# day 1

# print('--- INTRODUCTION ----')
# print('Hello world')
# print('kamlesh singh bisht')
# print ("Thank    you")
# print(3)

# ==================================

# age=25;

# if(age <=18):
#     print("You are adult!!")
#     print("you can't Drive!")
    
# print("End of the Program!!")
# print("my name is kamlesh")

# ==================================
# Day 2

# Data type
# integer,string,float,boolean, list,set,tuples,disctonary

# age = 15
# name="kamlesh"
# cgpa =8.6
# isPassed = True

# # age ='Not define' // dynacically typed

# print(age,name,cgpa ,isPassed)

# # # checking the type
# print(type(age))
# print(type(name))
# print(type(cgpa))
# print(type(isPassed))

# -------------------------------

# Day 3
# Typecasting

# age = 23
# print(type(age))

# b = '23'
# print(type(b))

# person_age= int(b)
# print(age ,type(person_age))


# person_age_str = str(person_age)
# print(person_age_str)
# print(type(person_age_str))

# pi = 3.14
# print(type(pi))
# pi_int = int(pi)
# print(pi_int , type(pi_int))

# -----------------------------------------
# Taking user input  // type cast

# name= input("Enter your name  ? ")
# age = int(input('Enter your age ? '))
# print(name,age)

# print(type(age) ,type(name))


# # # F string 

# print(f"your name is {name}, and your age is {age}.")

# -----------------------------------------

# Escape sequence 
# \n ,\t, \\, \", \'

# print('My name is \nkamlesh')
# print('My name is \tkamlesh')
# print('My name is \\kamlesh')
# print("My name \"is\" kamlesh") 
# print('My name \'is\' kamlesh')

#  print statement format 
#  sep " " and end "\n"
# print("Hello","Deepak","jay")
# print("Hello","   Deepak   ","    jay") 

# print("Hello","world",sep=',',end='****\n')
# print("tarikhet")

# print("Hello","world",sep='+',end='****')
# print("tarikhet")

# -----------------------------------------



# ----------- OPEREATOR ---------------
# addation,substration,multiplication,divison,reminder,floor divison,exponantial 

# a =10
# b=3
# print(a+b)
# print(a-b)
# print(a*b)
# print(a/b)
# print(a%b)
# print(a//b)
# print(a**b)

# comparison operators
# == ,!=,<,>,<=,>=
# print(5>2)
# print(5<2)

# Logical operator
# and , or , not

# And operator
# print(True  and True)
# print(True  and False)
# print(False  and True)
# print(False  and False)

# or operator
# print(True  or True)
# print(True  or False)
# print(False  or True)
# print(False  or False)

# not operator

# isPassed = True
# print(not isPassed)

# --------------------------
# Assignment Operators
# +=,-=,*=,/=,%=,**=,//=

# a =5
# b =2
# a+=b;
# print(a)  #7

# a-=b;
# print(a)   #5

# a*=b;
# print(a)   #10

# a/=b;
# print(a)   #5.0   5.0 /2 = 2.0

# a//=b;
# print(a)   #2.0

# a**=b;
# print(a)   #4.0

# ---------------------------------------------

# Membership Operator
# in operator

# fruits =['Banana','Apple',"cherry","banana"]

# print('banana' in fruits)


# #Identity Operator

# x= 10 
# y=10

# print(x is y)
# print(x is not y)

# Working with a list
# fruits = ["apple", "banana", "cherry"]
# print("apple" in fruits)      # Output: True
# print("orange" not in fruits)  # Output: True

# Working with a string (case-sensitive)
# text = "Python programming"
# print("Python" in text)       # Output: True
# print("python" in text)   


# ---------------------------
# Control flow and loops
# if ,elif, else ledder ......

# age = 70

# if age>12 and age<18:
#     print(f'Your age is {age},and your can\'t Drive')
#     print("it is if section of program")
# elif age>=18 and age<=60:
#     print(f'Your age is {age},and your can Drive')
#     print('This is elif section of program')
# elif age>60:
#     print(f'Your age is {age},and your can Drive')
#     print("This is another elif section ..")
#     print("Your are adult!!!")
# else:
#     print("You are child !! ")

# ---------------------------

# MATCH CASE LIKE A SWITCH CASE

# day = input('Enter the Day of Weekday ? ').lower()

# match day:
#     case 'sunday':
#         print(f"Weekday  : Sunday")      
#     case 'monday':
#         print(f"Weekday  : Monday")
#     case 'tuesday':
#         print(f"Weekday  : Tuesday")
#     case 'wednesday':
#         print(f"Weekday  : Wednesday")
#     case 'thrusday':
#         print(f"Weekday  : Thrusday")   
#     case 'friday':
#         print(f"Weekday  : Friday") 
#     case 'saturday':
#         print(f"Weekday  : Saturday")  
#     case _:
#         print("Enter the correct Day of Week ...")

# (--------------------------------------)

# day = int(input("Enter a no 1 for monday and 2 for tuesday and so on to check the day ? \n"))

# match day:
#     case 1 :
#         print( "Monday")
#     case 2 :
#         print( "Tuesday")
#     case 3 :
#         print( "Wednesday")
#     case 4 :
#         print( "Thrusday")
#     case 5 :
#         print( "Friday")
#     case 6 :
#         print( "Saturday")
#     case 7 | 0 :
#         print( "Sunday")
#     case _ : print("Please Enter the correct Day of Week ....")

# ====================================================================

# def weekDayInfo():
#     day = int(input("Enter a no 1 for monday and 2 for tuesday and so on to check the day! ? \n"))
    
#     match day:
#         case 1 :
#             return "Monday"
            
#         case 2 :
#             return "Tuesday"
#         case 3 :
#             return "Wednesday"
#         case 4 :
#             return "Thrusday"
#         case 5 :
#             return "Friday"
#         case 6 :
#             return "Saturday"
#         case 7 | 0 :
#             return "Sunday"
#         case _ :  
#             return "Invalid Day"

# print(weekDayInfo())

# ====================================================================

# FOR LOOP 
# fruits = ['apple',"banana",'graphs','carrot','peach']

# for fruit in fruits:
#     print(fruit)

#  range 6-1 =>  print up to 5

# for i in range(1,6): 
#     print(i)

# #  print up  0 to 9
# for i in range(10):
#     print(i)

# ----------------------------
# while loop

# i =5
# while(i <=15):
#     print(f'number is increase by 1 => ',i)
#     i+=1

# ----------------------------
# BREAK STATEMENT


# for count in range(1,11):
#     if(count > 5):
#         break
#     print(count)
     
# Continous STATEMENT

# for count in range(1,11):
#     if(count == 5):
#         continue
#     print(count)

#  pass statement is place holder for the fucture action in program => does nothing 
#  no action needed 

# for count in range(1,11):
#     if(count > 5):
#         pass # do nothing 
#     print(count)

# ---------------------------------------------------------------    
# string formation 

# ----STRING IN PYTHON-----------
#  3 way to print sequence of character 

# name = 'kamlesh'

# first_name= "kamlesh"


# full_name=""" 
# kamlesh
# singh  
# bisht"""

# print(name,first_name,full_name)

# String indexing

# first_name = 'kamlesh singh bisht'
# print(len(first_name))

# print(first_name[0])
# print(first_name[1])
# print(first_name[2])
# print(first_name[3])
# print(first_name[4])
# print(first_name[5])
# print(first_name[6])
# print(first_name[7])

# print(first_name[-1])   # negetive index + length  = position of the char
# print(first_name[-2])
# print(first_name[-3])

# ===========================================

#-------------------------------------
# String slicing

# text = "HelloPython kamlesh singh bisht "

# print(text[0:5]) 
# print(text[:5]) 
# print(text[7:]) 
# print(text[7:-2]) 
# print(text[::2])   #Hloyhnkmehsnhbst   (start : stop : step) setp is skip that character
    
# ==================================================    


# -----------------------------------
# String Methods

# full_name= "    kaMleSH singH BIsht     "
# name= "kamlesh"
# text = "python is good programming language python python python"
# print(name.capitalize())

# print(full_name.upper())
# print(full_name.lower())
# print(full_name.lstrip())
# print(full_name.rstrip())
# print(full_name.strip())
# print(full_name.strip().capitalize())
# print(full_name.replace("singH",'Singh'))
# print(text.split())  
# print(text.title())
# print(full_name)     # string is immutable orignal value of string can't change ...
# print(text.replace('python',"java")) # it replace all instance of python

# text= 'welcome to python!'
# print(text[3:-3])
# #-----------------------------
# print(text)
# print(text.find('p'))

# #SPLIT AND JOIN METHOD IN PYTHON

# text = 'python is a , interpreted programming , reboest and easy to use'

# list1 = text.split()
# print(list1)
# text = ' '.join(list1).replace(',',"")
# print(text)

# text = 'python123456'
# print(text.isalnum())
# print(text.isnumeric())
# print(text.isalpha())
# print(text.isspace())

# ==================================================================

#  string inter polation 

# -----------------------------------------
# text = "Hello python How are you"
# print(len(text))

# # ord return the ascii value 
# print(ord('A'))
# print(ord('H'))

# # chr return the aplha value of number 
# print(chr(65))
# print(chr(72))

# -------------------------------------------

# .fromat() Method

# name ="kamlesh"
# age = 25

# print("My name is {} and my age is {}.".format(name,age))

# # but 3.6 we are using f-string 

# print(f"my name is {name} and my age is {age}.")  

# -------------------------------------------#   

# ------------------------------------------
# FUNCTION AND MODULES
#  function define ,calling,parameter,argument,return the value ,default value,positonal args,keyword args

# def greet(name):
#     print(f"Welcome to you .. {name}")

# greet("kamlesh")
# greet("Deepak")
# greet("Suman")

# # #  To calculate avarage 

# def avarage(num1,num2,num3):
#     sum= (num1+num2+num3)/3
#     print(f"The avarage of {num1},{num2},{num3} is {sum}")

# avarage(2,3,4)
# avarage(5,2,1)
# avarage(20,21,12)

# # # -------------------------------
# # # FUNCTIONAL ARGUMENT AND RETURN VALUE

# def add(a,b):
#     sum = a+b
#     print(f"The sum of two number {a} and {b} : {sum}")

# add(5,6)
# add(10,6)
# add(15,16)
# # # ---------- Return the value from -------

# def add(a,b):
#     return a+b
#     # sum = a+b
#     # return sum

# print(f"The sum of two number is : {add(8,9)}")

# # ----------------------------------
# # default parameter

# def greet(name = "Guest"):
#     print(f"Welcome to you .. {name}")

# greet("kamlesh")
# greet() # default parameter 

# # -------------------------------------

# def student(name ="Guest", age="20"):
#     print(f"Name:{name},Age:{age}")

# student(age=20,name="kamlesh")
# student()
# student("Deepak",36)

# # ------------------------------
# # LAMDA FUNCTION => one liner function in python anonymous inline function

# square = lambda num: num*num
# print(f"The square of number is {square(4)}")

# print(square(5))
# print(square(8))

# # #  another lambda function
# add = lambda a,b: a+b

# print(add(5,6))
# print(f"The sum of two number is : {add(11,9)}")

# # #  another example

# number = [1,2,3,4,5,6,7,8,9]
# square = list(map(lambda x: x**2,number))

# print(square)

# # -------------------------------------
# # Recursion in python

# #  0 1 1 2 3 5 8 13 21
# #  0 1 2 3 4 5 6  7  8

# def fibonacci(num):
#     # base case of recurssion
#     if(num==0 or num==1):
#         return num
#     return fibonacci(num-2) + fibonacci(num-1)

# print(f"Fibonacci seriese :  {fibonacci(8)}")
# print(f"Fibonacci seriese :  {fibonacci(6)}")

# # --------------------------------
# # for factorial using recursion

# # 5 = 5 * 4 * 3 * 2 * 1
# # n = n * factorial(n-1)

# def factorial(num):
#     if(num==0):
#         return 1
#     return num * factorial(num-1)

# print(f"The factorial of number is  :  {factorial(5)}")

# # ------------------------------------------------------
# # **************************************
# # MODULES AND pip using external libraries

# # --- Build in modules in python

# import math

# print(math.sqrt(4))
# print(math.ceil(5.91))
# print(math.floor(5.01))

# # ----we can create and import our modules 

# import function_module

# print(function_module.factorial(5))
# print(function_module.fibonacci(5))
# function_module.greet("kamlesh")

# import requests
# # response = requests.get("https://www.google.com")
# # print(response.text)

# #  pip install pandas

# # ------------------------------------------
# # FUNCTION SCOPE AND GLOBAL SCOPE AND LIFETIME

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

# # # docstring (writing function Documentation ......)
# print(addation.__doc__)

# =================================================================
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
# print(marks)
# marks.sort()
# print(marks)
# marks.reverse()
# print(marks)

# # ***********************************

#  LIST COMPERHENSIONS 

# table = [5 * i for i in range(1,11)]
# print(table)

# # old way
# table = []
# num =5

# for i in range(1,11):
#     table.append(num*i)

# print(table)   

# # *********************************** 
# #  square of first 10 numbers

# square = [i*i for i in range(1,11)]
# print(square)

# # ***********************************
# ---------------------------------

# TUPLES 
# ordered but immutable 

# my_tuple=(10,20,50,20,20)
# my_tuple1=(563, ) 

# print(my_tuple)
# print(my_tuple1)

# print(my_tuple[0])
# print(my_tuple1[0])
# print(my_tuple.count(20))
# print(my_tuple.index(50)) 
# print(type(my_tuple1))

# # # tuple unpacking
# a,b,c,d,e= my_tuple
# print(a,b,c,d,e)


# # ***********************************
# ---------------------------------

# --------------------------------
# # SETS
# #  unorder set of element unique collection,no duplicate

# fruits= {'apple',"Apple",'banana','peach','cheery','banana','peach','cheery'}
# print(fruits)

# # # SETS METHOD
# fruits.add("graps")
# print(fruits)
# fruits.add("gaava")
# print(fruits)
# fruits.remove('gaava')
# print(fruits)
# fruits.pop()
# print(fruits)
# fruits.pop() 
# print(fruits)
# # fruits.remove('jay')  error becz not present
# fruits.discard('jay')
# # fruits.clear()
# print(fruits)

# # # example 2

# a = {1,2,3,8,9}
# b={1,2,12,13,14,15,16}

# print(a.union(b))
# print(a.intersection(b))
# print(a.difference(b))

# =====================================================
# *****************************************************

# dictonary

# student ={"name":"kamlesh",1:"Delhi","age":28,"grade":'A'}
# print(student)
# #  accessing the dictonary via key
# print(student["name"])
# print(student[1])
# print(student["age"])
# print(student["grade"])

# # modify the key value pair
# student["age"]=32
# print(student["age"])


# Adding new properties key value pair

# student["city"]= "Ranikhet"
# print(student)


# #  common dictonary method 

# print(student.keys())
# print(student.values())
# print(student.items())

# student.pop("age")
# # student.clear()
# print(student)

# #  dictonary comperhension

# square = {x : x**2 for x in range(6)}
# print(square)

# # list 
# square = [x**2 for x in range(6)]
# print(square)

# *************************************************
# *************************************************

# object oriented programming

# A class is a blueprint or template that defines the properties (attributes) and behaviors (methods) of objects.
# An object is an instance of a class. It has its own data and can access the methods defined in the class.
#class and objects
# 

# class Student:
#     collageName :"DBIT"
    
#     def __init__(self,name ,age):
#         self.name = name
#         self.age = age
        
#     def studentInfo(self):
#         print(f"The name of student is {self.name} and age is {self.age}")
        
    

# student1 = Student("kamlesh",30)
# print(student1)

# # <__main__.Student object at 0x000001E3A2F98590>
# # __main__ → Current module name.
# # Student → Class name.
# # object → Indicates it is an instance of the class.
# # 0x... → Hexadecimal memory address (object reference).
# student1.studentInfo() 
    
# ============================================
    
# class Dog:
#     species ="Cains familiaris"
    
#     def __init__(self,name,breed):
#         self.name= name
#         self.breed= breed
        
#     def bark(self):
#         print(f"{self.name} say woof!")
        

# my_dog = Dog("Buddy","Golden Retriever")
# another_Dog = Dog("Lucy","Labrador")


# my_dog.bark()
# print(Dog.species)

# ===================================================
# Inheritance  & polymorphism 

# class Animal:
#     def __init__(self ,name):
#         self.name= name
        
#     def speck(self):
#         print("Generic animal sound")
        
#     def canWalk(self):
#         print("animal can walk..")    
        
    
# class Dog(Animal):

#     def speck(self):
#         print("woof woof!!")
#         super().canWalk()
        
        
    
# class Cat(Animal):
#     def speck(self):
#         print("Meow!!")
        
#     def canWalk(self):
#         print("Cat is pat animal yes cat can walk ")
          


# my_dogs= Dog("labrador")
# my_dogs.speck()


# my_cat = Cat("pussy")
# my_cat.speck()
# my_cat.canWalk()

# animal = Animal("dogs")
# animal.speck()

# ========================================================

# getter and setter 
# __ double underscore method is use for private variable 

# class Person:
#     def __init__(self,name,age):
#         self.__name = name 
#         self.__age=age
    
#     def get_name(self):
#         return self.__name
    
#     def set_name(self,newName):
#         self.__name = newName
        
#     def get_age(self):
#         return self.__age
    
#     def set_age(self,newAge):
#         self.__age = newAge    
        
        
# p1 = Person("kamlesh",31)
# # print(p1.__age)  / could not access from outside the class directly 

# print(p1.get_name())
# print(p1.get_age())

# p1.set_name("Deepak")
# p1.set_age(20)

# print(p1.get_name())
# print(p1.get_age())


# ============================================================
# ============================================================

# using property decorator @


# class Person:
#     def __init__(self,name,age):
#         self.__name = name 
#         self.__age=age
        
#     @property
#     def name(self):
#         return self.__name
    
#     @name.setter
#     def name(self,newName):
#         self.__name = newName
        
#     @property    
#     def age(self):
#         return self.__age
    
#     @age.setter
#     def age(self,newAge):
#         self.__age = newAge    
              
# p1 = Person("kamlesh",31)
# # print(p1.__age)  / could not access from outside the class directly 
# print(p1.age)
# print(p1.name)

# p1.name ="Deepak"
# p1.age=32

# print(p1.age)
print(p1.name)

# ========================================================






