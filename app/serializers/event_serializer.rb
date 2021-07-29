class EventSerializer < ActiveModel::Serializer
  attributes :id, :type, :date, :time
  has_one :location
end
