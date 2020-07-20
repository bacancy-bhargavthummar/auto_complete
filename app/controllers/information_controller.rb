class InformationController < ApplicationController

  before_action :set_infos, only: [:index, :update_sort]

  def index
  end

  def auto_complete
    @results = Info.where("name LIKE ?", "%#{params['track'].capitalize}%").pluck(:name)
    @results = @results.present? ? @results : nil
    render json: @results
  end

  def search
    @result = Info.find_by("name = ?", "#{params['track']}")
  end

  def update_sort
    new_sequence = params["infos"]
    new_sequence.each_with_index do |person, index|
      position = index+1
      Info.find(person).update(position: position)
    end
    head 200, content_type: "text/html"
 end

  private

  def set_infos
    @infos = Info.order("position")
  end

end