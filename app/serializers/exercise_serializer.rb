class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :muscle_group

  has_many :ordered_exercise_sets

  def ordered_exercise_sets
    self.object.exercise_sets.order(reps: :desc)
  end
end
