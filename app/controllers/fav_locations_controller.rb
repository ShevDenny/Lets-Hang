class FavLocationsController < ApplicationController
    def index
        favLocations = FavLocation.all
        render json: favLocations
    end

    def create
        fav_location = FavLocation.create(fav_params)

        if fav_location.valid?
            render json: fav_location, status: 201
        else           
            render json: {errors: fav_location.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def fav_params
        params.permit(:user_id, :location_id, :note)
    end
end
