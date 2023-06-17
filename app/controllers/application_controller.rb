class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Show employees"}.to_json
  end

  #--------------- GET
  get "/employees" do
    Employee.all.to_json(include: [:clients, :projects])
  end

  get "/clients" do
    Client.all.to_json(include: [:projects])
  end

  get "/projects" do
    Project.all.to_json
  end

  get "/test" do
    test
  end

  get "/employees/:id" do
    Employee.find(params[:id]).to_json(include: [:clients, :projects])
  end

  get "/projects/:id" do
    Project.find(params[:id]).to_json
  end

  get "/employees/find_project/:id" do
    #{message: "test"}.to_json
    project = Project.find_by employee_id: params[:id]
    project.to_json
  end

  get "/employees/find_client/:id" do
    #{message: "test"}.to_json
    project = Project.find_by employee_id: params[:id]
    client_id = project.client_id
    client = Client.find(client_id)
    client.to_json
  end

  #---------------  POST
  post "/employees" do
    employee = Employee.create(firstname: params[:firstname], lastname: params[:lastname], title: params[:title], salary: params[:salary])
    #binding.pry
    employee.to_json
  end

  post "/add_employee_with_project" do
    employee = Employee.create(firstname: params[:firstname], lastname: params[:lastname], title: params[:title], salary: params[:salary])
    client = Client.order('RANDOM()').first

    project = Project.create(name: params[:name], employee_id: employee.id, client_id: client.id)
    #binding.pry
    employee.to_json
  end

  post "/clients" do
    client = Client.create(name: params[:name])
    #binding.pry
    client.to_json
  end

  post "/projects_rand" do
    client = Client.order('RANDOM()').first
    employee = Employee.order('RANDOM()').first

    project = Project.create(name: params[:name], employee_id: employee.id, client_id: client.id)
    #binding.pry
    project.to_json
  end


  post "/add_project_by_emp_id/:id" do
    client = Client.order('RANDOM()').first
    employee = Employee.find(params[:id])

    project = Project.create(name: params[:name], employee_id: employee.id, client_id: client.id)
    #binding.pry
    employee.to_json
  end



  #---------------  DELETE
  delete "/employees/:id" do
    employee = Employee.find(params[:id])
    employee.destroy
    employee.to_json
  end

  delete "/projects/:id" do
    project = Project.find(params[:id])
    project.destroy
    project.to_json
  end


    #---------------  PATCH
    patch "/employees/:id" do
      employee = Employee.find(params[:id])
      employee.update(salary: params[:salary])
      employee.update(title: params[:title])
      employee.to_json
    end
end
