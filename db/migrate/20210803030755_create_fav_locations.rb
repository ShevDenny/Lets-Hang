class CreateFavLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :fav_locations do |t|
      t.string :note
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
