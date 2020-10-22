class CreateParks < ActiveRecord::Migration[6.0]
  def change
    create_table :parks do |t|
      t.string :name
      t.integer :coasters
      t.string :location

      t.timestamps
    end
  end
end
