class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name

  has_many :exercises

end
