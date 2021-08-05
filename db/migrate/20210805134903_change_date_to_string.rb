class ChangeDateToString < ActiveRecord::Migration[6.1]
  def change
    change_column :events, :date, :string
  end
end
