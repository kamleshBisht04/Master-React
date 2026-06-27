




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





































































  































        























