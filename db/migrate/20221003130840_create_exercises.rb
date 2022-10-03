class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :image
      t.string :muscle_group

      t.timestamps
    end
  end
end
