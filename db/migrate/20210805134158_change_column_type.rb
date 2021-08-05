class ChangeColumnType < ActiveRecord::Migration[6.1]
  def change
    change_column :events, :time, :string
  end
end
