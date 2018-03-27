class Entry < ApplicationRecord
  belongs_to :user
  validates_presence_of [:entry, :category]

  enum category: [:entertainment, :health_care, :utilities,
                  :personal_care, :rent, :groceries, :home_supplies, :other]
end
