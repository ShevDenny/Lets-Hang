class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :type
      t.string :description
      t.string :hours
      t.boolean :groups
      t.boolean :outdoor
      t.boolean :date

      t.timestamps
    end
  end
end
