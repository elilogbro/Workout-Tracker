class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error
rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
    def show
        render json: User.find(params[:id]), status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private
    
    def user_params
        params.permit(:name, :age, :username, :password)
    end

    def invalid_record_error(error)
        render json: {error: error.message}, status: :unprocessable_entity
    end

    def not_found_error
        render json: {error: "User not found"}, status: :not_found
    end
end
