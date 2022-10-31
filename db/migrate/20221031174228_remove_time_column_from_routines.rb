class RemoveTimeColumnFromRoutines < ActiveRecord::Migration[7.0]
  def change
    remove_column :routines, :time
  end
end
