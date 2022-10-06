class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :password

  has_many :ordered_routines
  has_many :exercise_sets
  has_many :unique_exercises

  def ordered_routines
    self.object.routines.order(date: :desc)
  end

  def unique_exercises
    self.object.exercises.uniq
  end

end
