class Employee < ActiveRecord::Base
    has_many :projects
    has_many :clients, through: :projects

    def full_name
        "#{self.first_name} #{self.last_name}"
      end

    def workload
        self.projects.map do |proj|
            "- #{proj.name}, for the client, #{Client.find(proj.client_id).name}"    
        end
    end

end