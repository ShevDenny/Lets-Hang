class LocationsController < ApplicationController
    def index
        locations = Location.all
        render json: locations
    end

    def create
        new_location = Location.create(location_params)

        if location.valid?
            render json: new_location, status: 201
        else           
        render json: new_location
        end

    end

    private

    def location_params
        params.permit(:name, :address, :city, :category)
    end
end


# , :img_url, :description, :hours, :groups, :outdoor, :date