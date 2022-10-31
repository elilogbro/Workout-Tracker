class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :muscle_group
  
  has_many :workout_sets
end
