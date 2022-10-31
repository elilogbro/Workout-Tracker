class RemoveUserIdColumnFromExerciseSets < ActiveRecord::Migration[7.0]
  def change
    remove_column :exercise_sets, :user_id
  end
end
