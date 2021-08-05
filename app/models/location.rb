class Location < ApplicationRecord
    has_many :events, dependent: :destroy
    has_many :fav_locations, dependent: :destroy
    validates :name, presence: true, uniqueness: true
end
