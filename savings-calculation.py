item = input("What is the name of the item?")
itemPriceText = input("What is the price of that item?")
numberOfItemsText = input("HOw many would you like to purchase?")

itemPrice = float(itemPriceText)
nonMemberSavingPrice = itemPrice - (itemPrice * 0.2)
print("The Non Member Saving price =", nonMemberSavingPrice)

numberOfItems = float(numberOfItemsText)
memberSavingPrice = itemPrice - (2 * numberOfItems)
print("The member saving price =", memberSavingPrice)

nonMemberSaving = (itemPrice - nonMemberSavingPrice)
print("The Non Member saves =", nonMemberSaving)

memberSaving = (itemPrice - memberSavingPrice)
print("The Member saves =", memberSaving)

savingDifference = (nonMemberSaving - memberSaving)
print("If you were a member you would have saved =", savingDifference)

costNonMember = (nonMemberSavingPrice * numberOfItems)
print("Non Members total cost =", costNonMember)

costMember = (memberSavingPrice * numberOfItems)
print("Members total cost =", costMember)

print("item name =", item, "original price =", itemPriceText)
