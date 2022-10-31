class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username

  has_many :routines
end
