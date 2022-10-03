class User < ApplicationRecord
    has_many :routines

    validates :username, uniqueness: true
    validates :password, length: {minimum: 8}
    validates :username, :password, :name, presence: true
end
