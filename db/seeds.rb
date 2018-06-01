require 'faker'

User.create(
  name: 'Ana Nunes da Silva',
  email: 'ana.test@test.com'
)

5.times do
  Entry.create(
    amount: Faker::Number.decimal(2),
    description: Faker::Commerce.product_name,
    category: rand(0..5),
    entry_type: rand(0..1),
    date: rand(Date.today - 10..Date.today),
    user_id: 1
  )
end
