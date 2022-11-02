class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :muscle_group, :routine_id
  
  has_many :workout_sets
end
