class Info < ApplicationRecord
  acts_as_list
  validates :name, uniqueness: true
end
