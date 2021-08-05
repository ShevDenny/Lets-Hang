class FavLocation < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :user_id, presence: true
  validates :location_id, presence: true
  validates_uniqueness_of :user_id, scope: :location_id
end
