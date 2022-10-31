class RemoveDateAndTimeColumnFromRoutines < ActiveRecord::Migration[7.0]
  def change
    remove_column :routines, :date
  end
end
