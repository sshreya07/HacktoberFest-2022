import random

#enter min and max value

min_val = 1

max_val = 6

#decision

roll_again = "yes"



while roll_again == "yes" or roll_again == "y":

print("Dice rolls!!....")

print("The values are :")


print(random.randint(min_val, max_val))



print(random.randint(min_val, max_val))


#output for the user

roll_again = input("Roll the Dices Again?")
