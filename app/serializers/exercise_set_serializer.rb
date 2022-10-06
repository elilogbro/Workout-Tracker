class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :routine_id, :exercise_id, :weight, :reps

  belongs_to :routine
  belongs_to :user
end
