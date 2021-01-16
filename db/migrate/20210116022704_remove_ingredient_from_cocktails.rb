class RemoveIngredientFromCocktails < ActiveRecord::Migration[6.0]
  def change
    remove_reference :cocktails, :ingredient, null: false, foreign_key: true
  end
end
