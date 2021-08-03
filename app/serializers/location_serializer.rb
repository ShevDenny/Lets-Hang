class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :category, :img_url, :description, :hours, :groups, :outdoor, :date
end
