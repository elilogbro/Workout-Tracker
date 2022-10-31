class User < ApplicationRecord
    has_many :routines

    validates :username, uniqueness: true
    validates :username, :name, presence: true

    has_secure_password
end
