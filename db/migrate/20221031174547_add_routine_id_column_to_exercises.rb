class AddRoutineIdColumnToExercises < ActiveRecord::Migration[7.0]
  def change
    add_column :exercises, :routine_id, :integer
  end
end
