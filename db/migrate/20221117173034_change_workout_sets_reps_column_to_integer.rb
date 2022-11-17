class ChangeWorkoutSetsRepsColumnToInteger < ActiveRecord::Migration[7.0]
  def change
    change_column :workout_sets, :reps, 'integer USING CAST(reps AS integer)'
  end
end
