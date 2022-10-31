class RemoveRoutineIdColumnFromExerciseSets < ActiveRecord::Migration[7.0]
  def change
    remove_column :exercise_sets, :routine_id
  end
end
