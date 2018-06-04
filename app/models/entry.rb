class Entry < ApplicationRecord
  belongs_to :user
  validates_presence_of %i[entry_type category]

  enum entry_type: %i[income expense]

  enum category: %i[entertainment health_care utilities
                    personal_care rent groceries home_supplies other]
end
