require 'test_helper'

class ChoresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @chore = chores(:one)
  end

  test "should get index" do
    get chores_url, as: :json
    assert_response :success
  end

  test "should create chore" do
    assert_difference('Chore.count') do
      post chores_url, params: { chore: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show chore" do
    get chore_url(@chore), as: :json
    assert_response :success
  end

  test "should update chore" do
    patch chore_url(@chore), params: { chore: {  } }, as: :json
    assert_response 200
  end

  test "should destroy chore" do
    assert_difference('Chore.count', -1) do
      delete chore_url(@chore), as: :json
    end

    assert_response 204
  end
end
