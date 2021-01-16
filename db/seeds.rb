

# json = open('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list').read
# cocktail_hash = JSON.parse(json) 
# ingredients = cocktail_hash["drinks"]

# ingredients.each_with_index do |ingredient, index|
#     name = ingredients[index]["strIngredient1"]
#     ing = Ingredient.new
#     ing.name = name
#     ing.save
# end

# doses = ['a sprinkle of', 'a thimble full of', 'a liter of', 'a ton of', 'a shit ton of']
# doses.each do |dose|
#     Dose.create!(descr)
# end
