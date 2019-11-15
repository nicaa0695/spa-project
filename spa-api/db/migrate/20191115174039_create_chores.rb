class CreateChores < ActiveRecord::Migration[6.0]
  def change
    create_table :chores do |t|
      t.string "name"
      t.string "status"
      t.integer "house_hold_id"
      t.index ["house_hold_id"], name: "index_chores_on_house_hold_id"
      t.timestamps
    end
  end
end
