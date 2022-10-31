class Exercise < ApplicationRecord
    has_many :sets, dependent: :destroy
    belongs_to :routine

    validates :name, :image, :muscle_group, presence: true
end
