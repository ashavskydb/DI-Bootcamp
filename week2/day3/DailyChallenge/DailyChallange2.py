items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

clean_wallet = int(wallet.strip("$"))

clean_items_purchases = {}

for item, price in items_purchase.items():
    clean_price = price.strip('$')
    clean_price = clean_price.replace(',','')
    clean_price = float(clean_price)
    clean_items_purchases.update({item : clean_price})

    print(clean_items_purchases)

basket =  []

for item, price in items_purchase.items(): #chack the price 
    if price <= wallet: #compare/ check if i have enough money for it 
        basket.append(item) #put the item in the basket
        wallet -= price
    else:
        continue

print(basket)
