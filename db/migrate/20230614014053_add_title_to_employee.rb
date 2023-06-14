class AddTitleToEmployee < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :title, :string
  end
end
