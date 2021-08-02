class RenameNameToEvent < ActiveRecord::Migration[6.1]
  def change
    rename_column :events, :name, :event
  end
end
