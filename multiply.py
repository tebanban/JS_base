# This function prints a Multiplication table 

i=0
number= int(input("Enter a number:..."))
while i <= 12:
    p = number * i 
    print(number, "x" , i , "=" , p)
    i += 1
else:
    print("End of line")
