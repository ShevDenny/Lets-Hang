class Location < ApplicationRecord
    has_many :events
    has_many :users, through: :events
    has_many :fav_locations
end
