class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :type, :hours, :groups, :outdoor, :date
end
