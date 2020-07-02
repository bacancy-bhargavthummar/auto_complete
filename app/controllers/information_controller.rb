class InformationController < ApplicationController

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

end
