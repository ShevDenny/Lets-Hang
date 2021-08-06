class User < ApplicationRecord
    has_many :user_events
    has_many :fav_locations, dependent: :destroy
    validates :user_name, :password, presence: {message: "must be present"}
    validates :user_name, uniqueness: {message: "Username already taken"}
    validates :email, uniqueness: {message: "Email already taken"}
    has_secure_password
end
