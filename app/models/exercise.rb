class Exercise < ApplicationRecord
    has_many :exercise_sets
    has_many :routines, through: :exercise_sets

    validates :name, :image, :muscle_group, presence: true
end
