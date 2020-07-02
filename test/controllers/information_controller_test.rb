require 'test_helper'

class InformationControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get information_search_url
    assert_response :success
  end

end
