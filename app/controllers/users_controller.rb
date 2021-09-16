class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        if user.valid?
            render json: user, status: :created
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:name, :user_name, :password, :email, :photo) 
    end
end
