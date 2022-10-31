class Exercise < ApplicationRecord
    has_many :workout_sets, dependent: :destroy
    belongs_to :routine, optional: true

    validates :name, :image, :muscle_group, presence: true
end
