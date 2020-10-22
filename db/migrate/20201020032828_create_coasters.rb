class CreateCoasters < ActiveRecord::Migration[6.0]
  def change
    create_table :coasters do |t|
      t.string :name
      t.string :make
      t.string :model
      t.integer :height
      t.integer :speed
      t.integer :inversions

      t.timestamps
    end
  end
end
