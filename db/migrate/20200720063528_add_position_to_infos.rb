class AddPositionToInfos < ActiveRecord::Migration[6.0]
  def change
    add_column :infos, :position, :integer
  end
end
