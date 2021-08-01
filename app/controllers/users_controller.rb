class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            render json: {id: user.id, username: user.user_name}
        else 
            render json: { errors: user.errors.full_messages }
        end
    end

    private

    def user_params
        params.permit(:name, :user_name, :password, :email, :photo), 
    end
end
