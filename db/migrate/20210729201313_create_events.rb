class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :type
      t.date :date
      t.time :time
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
