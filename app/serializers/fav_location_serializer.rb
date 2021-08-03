class FavLocationSerializer < ActiveModel::Serializer
  attributes :id, :note
  has_one :user
  has_one :location
end
