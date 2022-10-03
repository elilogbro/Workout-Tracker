class CreateRoutines < ActiveRecord::Migration[7.0]
  def change
    create_table :routines do |t|
      t.integer :user_id
      t.string :name
      t.date :date
      t.string :time

      t.timestamps
    end
  end
end
