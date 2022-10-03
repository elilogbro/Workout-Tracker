class Routine < ApplicationRecord
    has_many :exercise_sets
    has_many :exercises, through: :exercise_sets
    belongs_to :user

    validates :name, presence: true
end
