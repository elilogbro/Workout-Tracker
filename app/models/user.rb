class User < ApplicationRecord
    has_many :routines
    has_many :exercise_sets
    has_many :exercises, through: :exercise_sets

    validates :username, uniqueness: true
    validates :password, length: {minimum: 8}
    validates :username, :password, :name, presence: true

    has_secure_password
end
