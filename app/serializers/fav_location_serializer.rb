class FavLocationSerializer < ActiveModel::Serializer
  attributes :id, :note, :location_belongs_to
  has_one :user
end
