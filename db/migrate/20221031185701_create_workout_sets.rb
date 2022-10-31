class CreateWorkoutSets < ActiveRecord::Migration[7.0]
  def change
    create_table :workout_sets do |t|
      t.string :exercise_id
      t.string :weight
      t.string :reps

      t.timestamps
    end
  end
end
