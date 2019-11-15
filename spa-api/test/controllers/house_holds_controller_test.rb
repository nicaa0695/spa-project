require 'test_helper'

class HouseHoldsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @house_hold = house_holds(:one)
  end

  test "should get index" do
    get house_holds_url, as: :json
    assert_response :success
  end

  test "should create house_hold" do
    assert_difference('HouseHold.count') do
      post house_holds_url, params: { house_hold: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show house_hold" do
    get house_hold_url(@house_hold), as: :json
    assert_response :success
  end

  test "should update house_hold" do
    patch house_hold_url(@house_hold), params: { house_hold: {  } }, as: :json
    assert_response 200
  end

  test "should destroy house_hold" do
    assert_difference('HouseHold.count', -1) do
      delete house_hold_url(@house_hold), as: :json
    end

    assert_response 204
  end
end
