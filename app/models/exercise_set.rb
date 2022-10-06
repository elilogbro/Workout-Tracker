class ExerciseSet < ApplicationRecord
    belongs_to :exercise
    belongs_to :routine
    belongs_to :user

    validates :weight, :reps, presence: true
end
