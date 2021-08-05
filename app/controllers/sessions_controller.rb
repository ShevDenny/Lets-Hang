class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    def create
        user = User.find_by(user_name: params[:user][:user_name])
        if user&.authenticate(params[:user][:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {message: ['incorrect username and/or password']}, status: :unauthorized
        end
    end

    def re_auth
        render json: @current_user
    end 


    def destroy
        session.delete :user_id
        head :no_content
    end
end