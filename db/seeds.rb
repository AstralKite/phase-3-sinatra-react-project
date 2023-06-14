puts "🌱 Seeding messages..."

#create 10 clients
5.times do
    Client.create(
        name:  Faker::Company.name
    )
end


#create Employee
5.times do
    Employee.create(
        firstname:  Faker::Name.first_name,
        lastname:   Faker::Name.last_name,
        title:      Faker::Company.profession,
        salary:     Faker::Number.decimal(l_digits: 5, r_digits: 2)
    )
end


#create Projects
20.times do

    rand(10..50).times do

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