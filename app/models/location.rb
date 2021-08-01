class Location < ApplicationRecord
    has_many :events
    has_many :fav_locations
    validates :name, presence: true, uniqueness: true
end
