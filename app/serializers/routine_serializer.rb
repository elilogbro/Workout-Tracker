class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :date, :time

  has_many :exercises
end
