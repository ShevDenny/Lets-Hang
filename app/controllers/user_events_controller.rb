class UserEventsController < ApplicationController

    def index
        user_event = UserEvent.where(user_id: @current_user.id)
        render json: user_event
    end 

    def show
        user_events = UserEvent.find_by(user_id: params[:user_id])
        if user_events
            render json: user_events
        else
            render json: {errors: user_events.errors.full_messages}, status: :not_found
        end
    end

    def create
        user_event = Event.create(user_event_params)

        if event.valid?
            render json: event, status: 201
        else           
            render json: {errors: event.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy      
        user_event = UserEvent.find_by(id: params[:id])
        user_event.destroy
    end

    private
    
    def event_params
        params.permit(:date, :time, :event, :location_id)
    end
end
