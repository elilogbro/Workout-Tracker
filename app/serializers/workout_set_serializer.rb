class WorkoutSetSerializer < ActiveModel::Serializer
  attributes :id, :exercise_id, :weight, :reps
end
