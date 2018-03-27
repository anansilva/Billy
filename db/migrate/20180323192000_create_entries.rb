class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.float :amount
      t.string :description
      t.integer :category
      t.date :date

      t.timestamps
    end
  end
end
