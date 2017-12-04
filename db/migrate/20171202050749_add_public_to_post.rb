class AddPublicToPost < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :public, :string
  end
end
