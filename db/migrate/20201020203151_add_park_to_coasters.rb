class AddParkToCoasters < ActiveRecord::Migration[6.0]
  def change
    add_reference :coasters, :park, null: false, foreign_key: true
  end
end
