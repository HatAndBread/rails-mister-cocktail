class Dose < ApplicationRecord
  belongs_to :cocktail
  belongs_to :ingredient

  validates :description, presence: true
  validates :cocktail, uniqueness: { scope: :ingredient }

  ITEMS = ['A wee tiny bit of ', 'A thimble full of ', 'A wallop of ', 'A bucket of ', 'A ton of ']

  def items
    return ITEMS
  end
end
