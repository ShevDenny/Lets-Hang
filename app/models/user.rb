class User < ApplicationRecord
    has_many :fav_locations
    has_many :user_events
end
