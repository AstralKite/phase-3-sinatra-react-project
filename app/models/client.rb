class Client < ActiveRecord::Base
    has_many    :projects
    has_many    :employees, through: :projects
end