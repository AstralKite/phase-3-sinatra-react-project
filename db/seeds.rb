puts "🌱 Seeding messages..."

#create 5 emplyees, clients, and projects.
5.times do
    Employee.create(
        firstname:  Faker::Name.first_name,
        lastname:   Faker::Name.last_name,
        title:      Faker::Company.profession,
        salary:     Faker::Number.decimal(l_digits: 5, r_digits: 2)
    )

    Client.create(
        name:  Faker::Company.name
    )
end

#create Projects
4.times do
    rand(2..4).times do

        employee = Employee.order('RANDOM()').first
        client = Client.order('RANDOM()').first

        Project.create(
            name:  Faker::Company.industry,
            employee_id: employee.id,
            client_id: client.id
        )
    end
end


puts "✅ Done seeding!"