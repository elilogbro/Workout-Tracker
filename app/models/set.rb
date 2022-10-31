class Set < ApplicationRecord
    belongs_to :exercise

    validates :weight, :reps, presence: true
end
