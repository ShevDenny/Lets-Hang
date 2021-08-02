class EventSerializer < ActiveModel::Serializer
  attributes :id, :event, :date, :time
  has_one :location
end
