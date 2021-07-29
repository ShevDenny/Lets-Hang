class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_name, :password_digest, :email, :photo
end
