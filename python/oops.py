# class and instance of class

# class Employee:
#     campany= "HP"

#     def get_salary(self):
#         return 34000
    
#     def get_name(self,name="kamlesh"):
#         self.name = name
#         return name
    

# e1 = Employee()
# print(e1.get_salary())
# print(e1.campany)
# print(e1.get_name("Deepak"))


# e2 = Employee()
# print(e2.get_salary())
# print(e2.campany)
# print(e1.get_name())

# ---------------------------------
# constructure -----

# class Employee:

#     def __init__(self,name,salary,bond):
#         self.name= name
#         self.salary= salary
#         self.bond= bond
#         self.get_EmpInfo()

#     def get_salary(self):
#         return self.salary
    
#     def get_EmpInfo(self):
#         print(f"The name of employee is {self.name} and the salary of employee {self.salary},and company offer a bond of {self.bond} years.")


# e1 = Employee("kamlesh",34000,4)
# # e1.get_EmpInfo()
# # print(e1.get_salary())

# e2 = Employee("Sanjay",60000,2)
# # e2.get_EmpInfo()
# # print(e2.get_salary())


# ---------------------------------
# # Instance method
# class Employee:
#     company ='ASUS'

#     def __init__(self,name,salary,bond ,company):
#         self.name= name
#         self.salary= salary
#         self.bond= bond
#         self.company=company
        

#     def get_salary(self):
#         return self.salary
    
#     def get_EmpInfo(self):
#         print(f"The name of employee is {self.name} and the salary of employee {self.salary},and {self.company} offer a bond of {self.bond} years.")


# e1 = Employee("kamlesh",34000,4,"DELL")
# e1.get_EmpInfo()
# print(e1.get_salary())
# ## instance attribute
# print(e1.company)

# ## class attributes
# print(Employee.company)

# # object introspection
# print(dir(Employee))



# ---------------------------------
# INHERITANCE 


# class Animal:
#     location ="Delhi"

#     def __init__(self,name):
#         self.name=name

#     def speek(self):
#         print("Generic animal sound")
    

# class Dog(Animal):

#     def speek(self):
#         super().speek()
#         print(f'{self.name} Barks woof woof...')

# class Cat(Animal):
#     def speek(self):
#         print("meow meow...")
        

# # a = Animal('Animal')
# # a.speek()

# b= Dog("Brono")
# b.speek()

# c= Cat("lilly")
# c.speek()

# -------------------------------

# ************************************
# ************************************
# ************************************
# *CLASS AND OBJECT AND CONSTRUCTOR***
# ************************************

# class Dog:

#     species="canis familiaris" 
# # constutctor
#     def __init__(self,name,breed):
#         self.name= name
#         self.breed = breed
        

#     def bark(self):
#         print(f"{self.name} says woof woof")

    
# labra = Dog("Brono","Labrador")
# labra.bark()
# labra.name ="pagal"
# # labra can acess property as well instance or class attributes
# print(labra.name)
# print(labra.breed)
# print(labra.species)



# golden= Dog("Buddy",'Golden Retriever')
# golden.bark()


# ------------------------------------------------
# Inheritance 

# class Animal:
#     breed = "cains familiaris"
#     def __init__(self,name="Generic"):
#         self.name= name

#     def speek(self):
#         print(f"Generic animal sound")
    
# class Dog(Animal):
    
#     def speek(self):
#         print(f"{self.name} say's woof woof")

# class Cat(Animal):
    
#     def speek(self):
#         print(f"{self.name} say's Meow.")


#  # using super keyword to call the parent class method

# class Bird(Animal):

#     def __init__(self, name,wingspan):
#         super().__init__(name)
#         self.wingspan= wingspan

#     def speek(self):
#         print(f"{self.name} say's cripping")
#         return super().speek()
    

# #  object create
# # 

# # animal = Animal("Rubby")
# # animal.speek()   

# labra = Dog("Rubby")
# labra.speek()

# golden = Dog("Tiger")
# golden.speek()

# lilly= Cat('lily')
# # lilly= Cat()
# lilly.speek()

# sparrow=Bird('Sparrow',10)
# sparrow.speek()

# ----------------------------
# IMPORTANT CONCEPT (vector)
# operator overloading

# class Point:
#     def __init__(self,x,y):
#         self.x=x
#         self.y=y
#     def sum(self,p):
#         return Point((self.x+p.x),(self.y+p.y))   

#     def print_Point(self):
#         print(f"x is {self.x} and Y is {self.y}")

#     # operator overloding __add__ function

#     def __add__(self,p):
#         return Point((self.x+p.x),(self.y+p.y))

# a = Point(5,6)
# b = Point(2,3)

# # better way to do it
# # p = a.sum(b)  
# #  we overloaded the + operator by writng __add__ function
# # __sub__,__mul__,__eq__,__trudiv__,etc

# p=a+b   # important one
# p.print_Point()

# ********************************************
# ********************************************
# DECORATORS IN PYTHON ****-

# def special_greet(fun):
#     def wrapper():
#         print("Execute the first part of program")
#         fun()
#         print("program Ends ......")
#     return wrapper

# # @decorators notations

# @special_greet
# def say_greet():
#     print(f"Hello Welcome to pythone")

# say_greet()

# f= special_greet(say_greet)
# f()

# ********************************************
# ********************************************
# using decortors with arguments 

# def repeat(n):
#     def greet_special(fun):
#         def wrapper(a):
#             for i in range(n):
#                 fun(a)
#         return wrapper
#     return greet_special

# @repeat(5)

# def say_greet(a):
#     print(f"hello {a}")

# say_greet("kamlesh")

# ********************************************
# ********************************************

# GETTER AND SETTER AND @property and method.setter 
# getter and setter approch 

# class student:
#     def __init__(self,name,age):
#         self._name= name
#         self._age= age
    
#     def get_name(self):
#         return self._name
    
#     def set_name(self,new_name):
#         self._name= new_name

#     def get_age(self):
#         return self._age
    
#     def set_age(self,new_age):
#         self._age= new_age

#     def studentInfo(self):
#         print(f"student name  : {self._name},age is {self._age}")


# s1 = student("Kamlesh singh bisht",25)
# # getter
# print(s1.get_name())
# print(s1.get_age())

# # setter 
# s1.set_name("Deepak")
# s1.set_age(29)
# s1.studentInfo()

# # we can't set directly 
# # s1.name="jayesh"
# # s1.age=82
# print(s1.get_name())
# print(s1.get_age())

# ------------------------------
# @property and method.setter decorator(pythonic approch)

# class student:
#     def __init__(self,name,age):
#         self._name= name
#         self._age= age
    
#     @property
#     def name(self):
#         return self._name
    
#     @name.setter
#     def name(self,new_name):
#         self._name= new_name

#     @property
#     def age(self):
#         return self._age
    
#     @age.setter
#     def age(self,new_age):
#         self._age= new_age

#     def studentInfo(self):
#         print(f"student name  : {self._name},age is {self._age}")


# s1 = student("Kamlesh singh bisht",25)
# s1.studentInfo()
# # we can directly acess it 
# print(s1.name)
# print(s1.age)

# # we can directly set the value

# s1.name="suman rawat"
# s1.age=55

# s1.studentInfo()
# print(s1.name)
# print(s1.age)
# ===========================================

# class Employee:

#     def __init__(self,name,salary):
#         self._name = name
#         self._salary = salary

#     def get_name(self):
#         return self._name
    
    
#     def set_firstname(self,name):
#         l=self._name.split(" ")
#         new_name =f"{name} {l[1]}"
#         self._name = new_name

#     def studentInfo(self):
#         print(f"studnet name is {self._name},salary is {self._salary}.")


# e1= Employee("suman Rawat",34000)
# print(e1.get_name())
# e1.studentInfo()

# e1.set_firstname("Deepak")
# print(e1.get_name())

# e1.studentInfo()

# ======================================
# via @ property decorator

# class Employee:

#     def __init__(self,name,salary):
#         self._name = name
#         self._salary = salary

#     @property
#     def name(self):
#         return self._name
    
#     @name.setter
#     def name(self,name):
#         l=self._name.split(" ")
#         new_name =f"{name} {l[1]}"
#         self._name = new_name

#     def studentInfo(self):
#         print(f"studnet name is {self._name},salary is {self._salary}.")


# e1= Employee("suman Rawat",34000)

# # via direct via propty & name.setter
# print(e1.name)
# e1.name="kamlesh singh"
# print(e1.name)
# e1.studentInfo()

# ============================================
# ============================================
# ANOTHER EXAMPLE OF GETTER AND SETTER 

# class circle:
#     def __init__(self ,radius):
#         self._radius=radius
#     @property
#     def radius(self):
#         return self._radius
    
#     @property
#     def area(self):
#         return 3.14 *self._radius*self._radius
    
# c1=circle(5)

# print(c1.radius)
# print(c1.area)

## c1.radius= 8
## error becoz  there is no setter 
## print(c1.radius)
## print(c1.area)
    
# ======================================================

# Instance || static || class method ||

# class Dog:
#     breed = "labrador"

#     def __init__(self,name,age):
#         self._name = name
#         self._age= age

#     # instance method
#     def dogInformation(self):
#         print(f"Dog name is {self._name},and age is {self._age} year old.")

#     # static method
#     @staticmethod
#     def sum(num1 ,num2):
#         return num1 +num2
    
    
#     # class method
#     @classmethod
#     def get_Breed(cls):
#         print(f"Dog Breed is {cls.breed}")

#     @classmethod
#     def change_Breed(cls,new_Breed):
#         cls.breed =new_Breed


    
# d1 = Dog("Bronno",3)
# d1.dogInformation()

# print(d1.sum(4,3))

# Dog.get_Breed()
# Dog.change_Breed("Golden Retriver")
# Dog.get_Breed()
# d1.get_Breed()
# d1.change_Breed("no breed")

# =================================
# =================================
# EXCEPTION HANDLING AND CUSTOM ERROR

# try:
#     while True:
#         a = int(input("Enter the first number :  "))
#         b = int(input("Enter the second number :  "))

#         c= a+b
#         print(c)
# except:
#     print("something error in program")

# ========================================

# try:
#     while True:
#         a = int(input("Enter the first number :  "))
#         b = int(input("Enter the second number :  "))

#         c= a+b
#         print(f"The sum of two no is : {c}")
# except Exception as e:
#     print("some error occoured!",e)

# ========================================
# IMPORTANT DIFFERENT TYPE OF ERROR HANDLING


# try:
#     while True:
#         a = int(input("Enter the first number :  "))
#         b = int(input("Enter the second number :  "))

#         c= a/b
#         print(f"The sum of two no is : {c}")

# except ValueError:
#         print("Please dont perform bed typecasts")

# except ZeroDivisionError:
#         print("hey! Don't  divide  by Zero")

# except Exception as e:
#     print("some error occoured!",e)

# ========================================
# ========================================
# CUSTOM ERROR RISE ERROR 


# a = int(input("Enter the first number :  "))
# b = int(input("Enter the second number :  "))

# if(b==0):
#     raise ValueError("divide by 0 not allowed")

# c=a/b

# print(f"The value of division is : {c}")

# ========================================
# ======= Else and finally  ============

# try:
#     a = int(input("Enter the first number :  "))
#     b = int(input("Enter the second number :  "))

#     c= a/b
#     print(f"The sum of two no is : {c}")

# except ZeroDivisionError:
#     print("Divide by zero not allowed!")
# except ValueError:
#     print("you are not enter any number can't Typecasting")

# else:
#     print("Another part of program execute if try find no error ")

# finally:
#     print("this part execute always !!!!")

# ======================================
#  finally is important always in function call 

# def sum(a,b):
#     try:
#         a = int(input("Enter the first number :  "))
#         b = int(input("Enter the second number :  "))

#         c= a/b
#         print(f"The sum of two no is : {c}")

#     except ZeroDivisionError:
#         print("Divide by zero not allowed!")
#     except ValueError:
#         print("you are not enter any number can't Typecasting")

#     else:
#         print("Another part of program execute if try find no error ")
        
# # print("ok")

#     finally:
#         print("this part execute always !!!!")

# sum(5,6)

# ======================================
# ======================================
# MAP FILTER AND REDUCE METHOD 


#  Reduce

# number = [1,2,3,4,5,6,7,8,9,10]

# # def square(x):
# #     return x*x

# # square_of_num = list(map(square,number))

# square_of_num=list(map(lambda x:x*x,number))
# print(square_of_num)

# =========================================
# filter method

# number =[1,2,3,6,10,85,96,48,275,4526,964,258,36,64]

# num_greater_then_nine= list(filter(lambda x:x>9,number))
# print(num_greater_then_nine)

# =========================================
 
# Reduce method (import  from functool import reduce)

# from functools import reduce


# number = [1,2,3,4,5,6,7,8,9,10]

# sum=reduce(lambda x,y:x+y ,number)

# print(sum)

# =========================================
# =========================================
# WALRUS OPERATOR
# 

# def veryslow_function():
#     print("something happen.....")
#     print("something happen.....")
#     print("something happen.....")
#     print("something happen.....")
#     print("something happen.....")
#     return 17

# ## both operation at same time 
# ## data = veryslow_function()

# ## if(data> 10):
# ##     print(data)

# if(data:=veryslow_function()):
#     print(data)
# else:
#     print("The number is not greater than 10")

# ============================================
# without  walrus operator 


## data = input("Enter any value : ")

## while data!="q":
##     print(data)
##     print("if you want to quit the program type 'q' .")
##     data = input("Enter any value : ")

# while data:=input("Enter the value : "):
#     if(data =="q"):
#         break
#     print("if your want to quit type 'q'.")  
#     print(data)

# ============================================
# ============================================

# arga and kwargs
# =============================
# arga return the tuples

# def sum(*args):
#     print(args)
#     result =0
#     for item in args:
#         result+=item
#     print(f"The sum is  : {result}")


# sum(5,6)
# sum(5,6,6)
# sum(10,2,3,4,5,7,8,9,10)

# =============================
    #   Kwargs return dictonary
# =============================

# def marks(**kwargs):
#     # print(kwargs)
#     # for item in kwargs.keys():
#     #     print(f"The marks of {item} is {kwargs[item]}")

#     for key,value in kwargs.items():
#         print(f"The marks of {key} is {value}")

# marks(kamlesh=36,Deeepak=56,jay=85,suman=78)

# =============================
    # args and Kwargs Together
# =============================

# def studentinfo(*args,**kwargs):
#     print(args)
#     print(kwargs)
#     for i in args:
#         print(i)
#     for key,value in kwargs.items():
#         print(f"Name is {key} and marks is {value}")
    
# studentinfo(1,2,3,4,5,6,kamlesh=65,deepak=96,ramesh=75)    

# ======================================
# ======================================
# ======================================












 





















































































        









