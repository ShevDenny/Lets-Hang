class FavLocationsController < ApplicationController

    def index
        fav_locations = FavLocation.where(user_id: @current_user.id)
        render json: fav_locations
    end

    def show
        location = Location.find_by(name: params[:name])
        byebug
        if location
            fav_exists = FavLocation.find_by(user_id: @current_user.id, location_id: location_id)
            if fav_exists
                render json: fav_exists.id
            else
                render json: {errors: fav_exists.errors.full_messages}, status: :not_found
            end
        end
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
            else           
                render json: {errors: new_location.errors.full_messages}, status: :unprocessable_entity
            end
        end
        fav_location = FavLocation.create(user_id: @current_user.id, location_id: id)
        
        if fav_location.valid?
            render json: fav_location, status: 201
        else           
            render json: {errors: fav_location.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def location_params
        params.permit(:name, :address, :city, :category, :img_url)
    end

end
