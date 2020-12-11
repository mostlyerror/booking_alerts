class CreateInmates < ActiveRecord::Migration[6.0]
  def change
    create_table :inmates do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :gender, null: false
      t.date :date_of_birth, null: false

      t.timestamps
    end
  end
end
