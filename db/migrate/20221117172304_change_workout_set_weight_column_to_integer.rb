class ChangeWorkoutSetWeightColumnToInteger < ActiveRecord::Migration[7.0]
  def change
    change_column :workout_sets, :weight, 'integer USING CAST(weight AS integer)'
  end
end
