class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :date, :time

  has_many :unique_exercises
  has_many :ordered_exercise_sets
  
  def unique_exercises
    self.object.exercises.uniq
  end

  def ordered_exercise_sets
    self.object.exercise_sets.order(reps: :desc)
  end
end
