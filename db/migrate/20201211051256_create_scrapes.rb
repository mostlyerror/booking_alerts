class CreateScrapes < ActiveRecord::Migration[6.0]
  def change
    create_table :scrapes do |t|
      t.datetime :started_at, null: false
      t.string :url, null: false

      t.timestamps
    end
  end
end
