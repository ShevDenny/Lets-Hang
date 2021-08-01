class FavLocationSerializer < ActiveModel::Serializer
  attributes :id, :note, :location_id, :user_id
  has_one :user
  has_one :location
end
