class SetSerializer < ActiveModel::Serializer
  attributes :id, :routine_id, :exercise_id, :weight, :reps
end
