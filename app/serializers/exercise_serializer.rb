class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :muscle_group, :routine_id
  
  has_many :ordered_workout_sets

  def ordered_workout_sets
    self.object.workout_sets.order(:weight)
  end
end
