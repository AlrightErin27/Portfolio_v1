class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :scores
  has_many :games, through: :scores
end
