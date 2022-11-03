class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :formatted_created_at

  has_many :exercises

  def formatted_created_at
    self.object.created_at.strftime("%B %-d, %Y")
  end

end
