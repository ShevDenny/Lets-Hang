class UserEventSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :event
end
