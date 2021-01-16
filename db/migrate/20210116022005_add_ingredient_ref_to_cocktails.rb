class AddIngredientRefToCocktails < ActiveRecord::Migration[6.0]
  def change
    add_reference :cocktails, :ingredient, null: false, foreign_key: true
  end
end
