class Routine < ApplicationRecord
    belongs_to :user
    has_many :exercises, dependent: :destroy

    validates :name, presence: true
end
