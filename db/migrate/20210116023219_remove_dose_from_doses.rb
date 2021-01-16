class RemoveDoseFromDoses < ActiveRecord::Migration[6.0]
  def change
    remove_reference :doses, :dose, null: false, foreign_key: true
  end
end
