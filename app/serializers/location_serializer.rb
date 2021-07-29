class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :type, :description, :hours, :groups, :outdoor, :date
end
