class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events
    end

    def create
        event = Event.create(event_params)

        if event.valid?
            render json: event, status: 201
        else           
            render json: {errors: event.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def event_params
        params.permit(:date, :time, :name, :location_id)
    end
end
