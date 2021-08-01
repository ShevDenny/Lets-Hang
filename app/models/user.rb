class User < ApplicationRecord
    has_many :user_events
    has_many :fav_locations
    validates :user_name, :password, presence: {message: "must be present"}
    validates :user_name, uniqueness: true 
    has_secure_password
end
