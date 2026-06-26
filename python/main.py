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
    
    
    
    
    





