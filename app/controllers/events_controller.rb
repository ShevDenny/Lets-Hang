class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events
    end

    def create
        
        location = Location.find_by(name: params[:name])
        id = 0

        if location
            id = location.id
            
        else
            new_location = Location.create(location_params)
            
            if new_location.valid?
                id = new_location.id
                
                # render json: new_location, status: 201
            else           
                render json: {errors: new_location.errors.full_messages}, status: :unprocessable_entity
            end
        end
        event = Event.create(location_id: id, event: params[:event], date: params[:date], time: params[:time])
        
        if event.valid?
            render json: event, status: 201
        else           
            render json: {errors: event.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def location_params
        params.permit(:name, :address, :city, :category, :img_url, :date, :time, :event)
    end
    
    # def event_params
    #     params.permit()
    # end
end
