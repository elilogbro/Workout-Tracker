class ExerciseSet < ApplicationRecord
    belongs_to :exercise
    belongs_to :routine

    validates :weight, :reps, presence: true
end
