class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id

        render json: user, status: :created
        # if user.valid?
        #     render json: {id: user.id, username: user.user_name}
        # else 
        #     render json: { errors: user.errors.full_messages }
        # end
    end

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:name, :user_name, :password, :email, :photo) 
    end
end
