class CreateProject < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string  :name
      t.integer :employee_id
      t.integer :client_id
    end
  end
end
