class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username

  has_many :formatted_routines

  def formatted_routines
    self.object.routines.order(created_at: :desc)
  end
end
